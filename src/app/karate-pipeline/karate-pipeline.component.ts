import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GitModel } from '../models/GitModel';

import { karateService } from '../services/karateService';


@Component({
  selector: 'app-karate-pipeline',
  templateUrl: './karate-pipeline.component.html',
  styleUrls: ['./karate-pipeline.component.css']
})
export class KaratePipelineComponent implements OnInit {
  rev1: boolean = false;
  artifactUrl: string = '';
  messageSuccess: boolean = true;
  build1: boolean = true;
  build2: boolean = false;
  url: string = '';
  pipelineOutput: string = '';
  jobStatusLast: string = '';
  jobOutput: string = '';
  status: string = '';
  pipelineId: string = '';
  jobUrl: string = '';
  job: string = '';
  constructor(private service: karateService, public dialogRef: MatDialogRef<KaratePipelineComponent>) { }
  show: boolean = false;
  show1: boolean = false;

  show2: boolean = false;
  show3: boolean = false;

  isEnabled: boolean = true;
  isEnabled2: boolean = true;


  ngOnInit(): void {


  }
  triggerPipeline() {
    this.show = true;
    this.pipelineOutput = "Checking Info....";
    console.log("Run pipeline button clicked!")
    let pipeline1 = new GitModel("[Trigger-Token]", "feature/orderevent_comparator");
    console.log("Pipeline created" )
    this.service.triggerPipeline(pipeline1).subscribe((data: any) => {
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
        console.log("Faild to build a application!");
        this.show1 = false;
      }

      this.messageSuccess = true;

      setTimeout(() => {
        console.log("Loading...")
        this.isEnabled = false;
        this.build1 = false;
        this.build2 = true;
        console.log("Application Build Successfully!")
        console.log("----------------------------------")
        this.pipelineOutput = "Application Build Successfully!"
        this.rev1 = true;
      }, 150000);


      this.jobUrl = "https://gitlab.com/api/v4/projects/29249469/pipelines/" + this.pipelineId + "/jobs";
      this.service.triggerJob(this.jobUrl).subscribe((data: any) => {
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
    this.jobOutput = "Comparing Responses...."
    console.log("Checking Info...")
    // this.jobOutput = "Comparing Responses...."


    this.jobUrl = "https://gitlab.com/api/v4/projects/29249469/jobs/" + this.job + "/play";
    this.service.triggerJob1(this.jobUrl).subscribe((data: any) => {
      this.show2 = true;
      console.log("Compare results button clicked!")
      this.jobOutput = "Comparing Responses...."
      console.log("Comparison job running in gitlab pipeline.")
      console.log("The running job id --> " + data.id)


    }

    )

    setTimeout(() => {
      this.show2 = true;
      this.isEnabled = true;
      this.jobOutput = "Comparison is successful!"
      console.log("Comparison is successful!")
    }, 40000)

    setTimeout(() => {
      this.show2 = true;
      this.jobOutput = "Populating the comparison results..."
      console.log("Populating the comparison results...")
    }, 40000)

    setTimeout(() => {
      this.service.getJobStatus2("https://gitlab.com/api/v4/projects/29249469/jobs/" + this.job).subscribe((data: any) => {

        this.jobStatusLast = data.status;
        console.log("Getting the status of the manual job --> " + this.jobStatusLast)

        if (this.jobStatusLast == "success") {
          this.artifactUrl = "https://gitlab.com/tmobile/DSG/dfm/sb/sb/txn/sap-java-demo/-/jobs/" + this.job + "/artifacts/download"
          this.show2 = true;
          this.jobOutput = "Report is ready to download!"
          console.log("Report is ready to download!")
          this.isEnabled2 = false;
        }
        else {
          this.show2 = false;
          this.show3 = true;
          this.jobOutput = "Failed during comparison!"
          console.log("Failed during comparison!")

        }

      })

    }, 300000);



  }

  buttonClose() {
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';
  }

}
