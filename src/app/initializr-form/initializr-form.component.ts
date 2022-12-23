import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { springInitializer } from 'src/springInitializer';

enum CheckBoxType {true, false};
@Component({
  selector: 'app-initializr-form',
  templateUrl: './initializr-form.component.html',
  styleUrls: ['./initializr-form.component.css']
})
export class InitializrFormComponent implements OnInit {

  MyBooleanValue:boolean=false;


  
  projects = ['maven-project', 'gradle-project'];

  languages = ['java', 'kotlin', 'groovy']

  springVersions = ['2.6.0(SNAPSHOT)', '2.6.0(M2)', '2.5.5(SNAPSHOT)', '2.5.4', '2.4.11(SNAPSHOT)', '2.4.10', '2.2.4.RELEASE']

  packagings = ['jar', 'war']

  javaVersions = ['1.8', '8', '11', '16']

  cloudIntegration = ['PCF Deployment','AWS Conductor']

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;

  dropdownList1: any = [];
  selectedItems1: any = [];

  dropdownList2: any = [];
  selectedItems2: any = [];

  dropdownList3: any = [];
  selectedItems3: any = [];

  dropdownList4: any = [];
  selectedItems4: any = [];

  dropdownList5: any = [];
  selectedItems5: any = [];

  dependencies: string = '';
  dependencies1: string = '';
  dependencies2: string = '';
  dependencies3: string = '';
  dependency: string = '';

  customUrl: string = ''

  model = new springInitializer(1, this.projects[0], this.languages[0], this.springVersions[0], 'com.tmobile.intializr', 'sample', '0.0.1-SNAPSHOT', 'dryRun1-1', 'Demo for Spring Boot', 'com.example.demo', this.packagings[0], this.javaVersions[0], '');

  submitted = false;

  show: boolean = false;


  proj: string = '';

  lan: string = '';

  pack: string = '';

  i = 0;
  

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogBoxComponent>) { }

  btnclick() {
    if (this.dependencies !== "") {
      console.log(this.customUrl);
      window.open(this.customUrl, "_blank");
    }
  }

  btn2() {
    if (this.dependencies !== "") {
      const dialogConfig = new MatDialogConfig();
      console.log(this.customUrl)
      dialogConfig.data = this.customUrl;
      let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    }


  }
  close() {
    console.log("closed");
  }

  buttonClick() {
    this.dialogRef.close("Thanks for using me!");
    let blurMode = document.getElementById("body") as HTMLElement;
    blurMode.style.filter = 'blur(0px)';

  }

  ngOnInit() {
    this.dropDownSelections();
  }

  check_box_type = CheckBoxType;

  currentlyChecked: CheckBoxType;

  selectCheckBox(targetType: CheckBoxType) {
    
    this.currentlyChecked = targetType;
      if(targetType==CheckBoxType.true){
        this.currentlyChecked = CheckBoxType.true;
        this.MyBooleanValue=true;

      }
      if(targetType==CheckBoxType.false){
        this.currentlyChecked = CheckBoxType.false;
        this.MyBooleanValue=false;

      }
      // else{
      // this.currentlyChecked = CheckBoxType.false;
      // this.MyBooleanValue=false;
      // }
      return;

   
  }


  onItemSelect(obj: object) {
    if (this.selectedItems.length != 0) {
      this.show = false
      let values = this.items(obj)
      this.dependency += "&dependencies=" + values;
      console.log(this.dependency)
    }
  }

  

  onItemSelect1(obj: object) {
    if (this.selectedItems1.length != 0) {

      let values = this.items1(obj)
      this.dependencies1 += "&dependencies=" + values;
      console.log(this.dependencies1)
    }
  }

  onItemSelect2(obj: object) {
    if (this.selectedItems2.length != 0) {

      let values = this.items2(obj)
      this.dependencies2 += "&dependencies=" + values;
      console.log(this.dependencies2);
    }
  }

  onItemSelect3(obj: object) {
    if (this.selectedItems3.length != 0) {

      let values = this.items3(obj)
      this.dependencies3 += "&dependencies=" + values;
      console.log(this.dependencies3)
    }
  }

  onItemDeSelect(obj: object) {
    if (this.selectedItems.length == 0) {
      this.show = true;
    }
    else {
      let values = this.items(obj)
      this.dependency = this.dependency.replace("&dependencies=" + values, "")
    }
    console.log(this.dependency)
  }

  onItemDeSelect1(obj: object) {


    let values = this.items1(obj)
    this.dependencies1 = this.dependencies1.replace("&dependencies=" + values, "")
    console.log(this.dependencies1)
  }

  onItemDeSelect2(obj: object) {

    let values = this.items2(obj)
    this.dependencies2 = this.dependencies2.replace("&dependencies=" + values, "")

    console.log(this.dependencies2)
  }

  onItemDeSelect3(obj: object) {

    let values = this.items3(obj)
    this.dependencies3 = this.dependencies3.replace("&dependencies=" + values, "")

    console.log(this.dependencies3)
  }

  onSelectAll(items: object) {
    for (const [, values] of Object.entries(items)) {
      this.onItemSelect(values);
      let value = this.items(values)
      this.dependency += "&dependencies=" + value;
    }
    console.log(this.dependency)
  }

  onSelectAll1(items: object) {
    for (const [, values] of Object.entries(items)) {
      let value = this.items1(values)
      this.dependencies1 += "&dependencies=" + value;
    }
    console.log(this.dependency)
  }

  onSelectAll2(items: object) {
    for (const [, values] of Object.entries(items)) {
      let value = this.items2(values)
      this.dependencies2 += "&dependencies=" + value;
    }
    console.log(this.dependency)
  }

  onSelectAll3(items: object) {
    for (const [, values] of Object.entries(items)) {
      let value = this.items3(values)
      this.dependencies3 += "&dependencies=" + value;
    }
    console.log(this.dependency)
  }

  pop() {
    if (this.selectedItems.length != 0) {
      this.customUrl = this.urlCreate();
      this.dependencies = this.dependency + this.dependencies1 + this.dependencies2 + this.dependencies3;
      this.customUrl = this.customUrl + this.dependencies;
      if (this.i == 0) {
        let i1 = document.getElementById("item1") as HTMLElement;
        i1.style.transform = 'translateX(-150px)';
        let i2 = document.getElementById("item2") as HTMLElement;
        i2.style.transform = 'translateX(150px)';
        this.i = 1;
      }
      else {
        let i1 = document.getElementById("item1") as HTMLElement;
        i1.style.transform = 'translate(0)';
        let i2 = document.getElementById("item2") as HTMLElement;
        i2.style.transform = 'translate(0)';
        this.i = 0;
      }
    }
    else {
      if (this.selectedItems.length == 0) {
        this.show = true;
      }
      let i1 = document.getElementById("item1") as HTMLElement;
      i1.style.transform = 'translate(0)';
      let i2 = document.getElementById("item2") as HTMLElement;
      i2.style.transform = 'translate(0)';
    }
  }

  urlCreate() {
    let desp = this.model.inputDescription.replace(/ /gi, "+");

    this.proj = this.model.project.toLowerCase();

    this.lan = this.model.language.toLowerCase();

    this.pack = this.model.packaging.toLowerCase();

     let url1 = "http://localhost:8037/starter.zip?name=" + this.model.inputName + "&groupId=" + this.model.inputGroup + "&artifactId=" + this.model.inputArtifact + "&version=" + this.model.springVersion + "&description=" + desp + "&packageName=" + this.model.inputPackageName + "&type=" + this.proj + "&packaging=" + this.pack + "&javaVersion=" + this.model.javaVersion + "&language=" + this.lan + "&bootVerison=" + this.model.springVersion;
    
    return url1;
  }

  dropDownSelections() {
    this.dropdownList = [
      { item_id: 1, item_text: 'WSDL' },
      { item_id: 2, item_text: 'RabbitMQ' },
      { item_id: 3, item_text: 'Spring BootDevTools' },
      { item_id: 4, item_text: 'Deep Message Handler' },
      { item_id: 5, item_text: 'Util Logger' },
      { item_id: 6, item_text: 'Common Lang' },
      { item_id: 7, item_text: 'Jolt' },
      { item_id: 8, item_text: 'JoltSE' },
      { item_id: 9, item_text: 'JoltWLS' },
      { item_id: 10, item_text: 'JaxWS' },
      { item_id: 11, item_text: 'HTTP Transports' },
      { item_id: 12, item_text: 'Gitlab-Repo' }
    ];

    this.selectedItems = [

    ];



    this.dropdownList1 = [
      { item_id: 1, item_text: 'WSDL Gen' },
      { item_id: 2, item_text: 'Swagger Plugin' },
      { item_id: 3, item_text: 'Jacoco Plugin' }
    ];

    this.selectedItems1 = [

    ];



    this.dropdownList2 = [
      { item_id: 1, item_text: 'ORACLE + JPA' },
      { item_id: 2, item_text: 'RestTemplate' }
    ];

    this.selectedItems2 = [

    ];



    this.dropdownList3 = [
      { item_id: 1, item_text: 'Model' },
      { item_id: 2, item_text: 'Repo' },
      { item_id: 3, item_text: 'Config' },
      { item_id: 4, item_text: 'Controller' },
      { item_id: 5, item_text: 'Service' },
      { item_id: 6, item_text: 'Listener' },
      { item_id: 7, item_text: 'Publisher' },
      { item_id: 8, item_text: 'Endpoints' },
      { item_id: 9, item_text: 'Constants' },
      { item_id: 10, item_text: 'Util' },
      { item_id: 11, item_text: 'Exception' }
    ];

    this.selectedItems3 = [

    ];

    this.dropdownList4 = [
      { item_id: 1, item_text: 'PCF Deployment' },
      { item_id: 2, item_text: 'AWS Conductor' }
    ];

    this.selectedItems4 = [

    ];

    this.dropdownList5 = [
      { item_id: 1, item_text: 'Sonar Scan' },
      { item_id: 2, item_text: 'Fortify Scan' },
      { item_id: 3, item_text: 'Container Security' }
    ];

    this.selectedItems5 = [

    ];

    



    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

  }

  items(obj: object) {
    let values = ''
    console.log("dependencies");
    for (const [, value] of Object.entries(obj)) {
      values = value;
    }
    switch (values) {
      case "Spring BootDevTools": {
        values = "devtools";
        break;
      }

      case "HTTP Transports": {
        values = "org.apache.cxf%3Acxf-rt-transports-http";
        break;
      }

      case "JaxWS": {
        values = "org.apache.cxf%3Acxf-rt-frontend-" + values.toLowerCase();
        break;
      }

      case "Jolt": {
        values = "com.tmobile%3A" + values.toLowerCase();
        break;
      }

      case "JoltWLS": {
        values = "com.tmobile%3A" + values.toLowerCase();
        break;
      }

      case "JoltSE": {
        values = "com.tmobile%3A" + values.toLowerCase();
        break;
      }

      case "Deep Message Handler": {
        values = "tmo-deep";
        break;
      }

      case "Util Logger": {
        values = "com.tmobile.rsp%3Acommon-util-logger";
        break;
      }

      case "Common Lang": {
        values = "org.apache.commons%3Acommons-lang3";
        break;
      }

      default: {
        values = values.toLowerCase();
        break;
      }
    }
    return values;
  }

  items1(obj: object) {
    let values = ''
    console.log("plugins");
    for (const [, value] of Object.entries(obj)) {
      values = value;
    }
    values = values.toLowerCase().split(" ")[0] + "-plugin";
    return values;
  }

  items2(obj: object) {
    let values = '';
    console.log("backends");
    for (const [, value] of Object.entries(obj)) {
      values = value;
    }
    values = "backend-" + values.toLowerCase().split(" ")[0];
    return values;
  }

  items3(obj: object) {
    let values = '';
    console.log("packages");
    for (const [, value] of Object.entries(obj)) {
      values = value;
    }
    values = "package-" + values.toLowerCase()
    return values;
  }

  // items4(obj: object) {
  //   let values = ''
  //   console.log("cloud integration");
  //   for (const [, value] of Object.entries(obj)) {
  //     values = value;
  //   }
  //   values = values.toLowerCase().split(" ")[0] + "-cloud";
  //   return values;
  // }

  // items5(obj: object) {
  //   let values = ''
  //   console.log("security integration");
  //   for (const [, value] of Object.entries(obj)) {
  //     values = value;
  //   }
  //   values = values.toLowerCase().split(" ")[0] + "-security";
  //   return values;
  // }

}
