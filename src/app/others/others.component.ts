import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GitModel } from '../models/GitModel';
import { GatlingService } from '../services/GatlingService';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {



  constructor(private service: GatlingService, public dialogRef: MatDialogRef<OthersComponent>) { }
  ngOnInit(): void {

  }





  rev1: boolean = false;
  artifactUrl: string = '';
  messageSuccess: boolean = true;
  url: string = '';
  pipelineOutput: string = '';
  jobStatusLast: string = '';
  jobOutput: string = '';
  status: string = '';
  pipelineId: string = '';
  jobUrl: string = '';
  job: string = '';
  show: boolean = false;
  show1: boolean = false;

  show2: boolean = false;
  show3: boolean = false;

  isEnabled: boolean = true;
  isEnabled2: boolean = true;

  close() {
    this.show = false;
  }

  close1() {
    this.show1 = false;
  }



  triggerPipeline() {
    this.show = true;
    this.pipelineOutput = "Checking Info....";
    console.log("Generate performance report button clicked!")
    let pipeline1 = new GitModel("[Trigger-Token]", "feature/gatling_addresslookup");
    this.service.triggerPipelineGat(pipeline1).subscribe((data: any) => {
      console.log("Pipeline created!")
      this.url = data.web_url;
      console.log("Pipeline URL --> " + this.url)
      this.pipelineId = data.id;
      console.log("Pipeline ID --> " + this.pipelineId)
      if (this.url != null) {
        this.show = true;
        this.pipelineOutput = "Application Building....";
        console.log("Application Building....")
      }
      if (this.url == '') {
        this.pipelineOutput = "Faild to build a application!";
        console.log("Faild to build a application!")
        this.show1 = true;
      }

      this.messageSuccess = true;


      setTimeout(() => {
        console.log("Loading...")
        this.isEnabled = false;
        this.pipelineOutput = "Application Build Successfully!"
        console.log("Application Build Successfully!")
        console.log("----------------------------------")
        this.rev1 = true;
      }, 100000);





      this.jobUrl = "https://gitlab.com/api/v4/projects/30653523/pipelines/" + this.pipelineId + "/jobs";
      this.service.triggerJobGat(this.jobUrl).subscribe((data: any) => {
        console.log("The following manual job will be triggered when you click the compare response button!")
        console.log("The manual jobid --> " + data[0].id)
        console.log("The manual job status --> " + data[0].status)
        console.log("----------------------------------")
        this.job = data[0].id;


      })

    })

  }

  triggerJob1() {
    this.show2 = true;
    console.log("Analyse performance button clicked!")
    this.jobOutput = "Analysing the performance..."
    // this.jobUrl = "https://gitlab.com/api/v4/projects/30653523/jobs/" + this.job + "/play";
    // this.service.triggerJob1Gat(this.jobUrl).subscribe((data: any) => {
    //   this.show2 = true;
    //   console.log("Analyse performance button clicked!")
    //   this.jobOutput = "Analysing the performance..."
    //   console.log("Analysing the performance...")
    //   console.log("Performance job running in gitlab pipeline.")
    //   console.log("The running job id --> " + data.id)


    // }

    // )

    setTimeout(() => {
      this.show2 = true;
      this.isEnabled = true;
      this.jobOutput = "Analysed Successfully!"
      console.log("Analysed Successfully!")
    }, 30000)

    setTimeout(() => {
      this.show2 = true;
      this.jobOutput = "Populating the performance results..."
      console.log("Populating the performance results...")
    }, 30000)

    setTimeout(() => {
      this.service.getJobStatus2Gat("https://gitlab.com/api/v4/projects/30653523/jobs/" + this.job).subscribe((data: any) => {

        this.jobStatusLast = data.status;
        console.log("Getting the status of the manual job --> " + this.jobStatusLast)

        if (this.jobStatusLast == "success") {
          this.artifactUrl = "https://gitlab.com/tmobile/bpm/poc/poc/gatling/-/jobs/" + this.job + "/artifacts/download"
          this.show2 = true;
          this.jobOutput = "Report is ready to download!"
          console.log("Report is ready to download!")
          this.isEnabled2 = false;
        }
        else {
          this.show2 = false;
          this.show3 = true;
          this.jobOutput = "Failed during fetching the report!"
          console.log("Failed during fetching the report!!")

        }



      })

    }, 150000);


  }


  buttonClose() {
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';
  }

}
