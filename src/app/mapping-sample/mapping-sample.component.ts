import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { completeModal, Header, QueryParam, wiremockModal, Request, Response } from '../models/wiremockModal';

@Component({
  selector: 'app-mapping-sample',
  templateUrl: './mapping-sample.component.html',
  styleUrls: ['./mapping-sample.component.css']
})
export class MappingSampleComponent implements OnInit {
  value: string = ""
  items: any[] = []

  completeModals: any[] = [""]

  list1: any[] = []
  list2: any[] = []

  reqname = ""

  httpMethod = ""
  httpmethods = ["GET", "PUT", "POST", "DELETE"]

  headermethods = ["contains", "matches", "doesNotMatch"]

  paramethods = ["contains", "matches", "doesNotMatch"]

  urlpattern = ""

  headerEnable: boolean = false

  headerName = ""
  headerMethod = ""
  headerValue = ""

  headersList: string = "";

  headers = new Map()
  header = new Header(this.headers)

  paramEnable: boolean = false

  paramName = ""
  paraMethod = ""
  paramValue = ""

  queryParamsList: string = "";

  queryParams = new Map()
  param = new QueryParam(this.queryParams)

  bodyEnable: boolean = true

  reqBody = ""

  statusCode = 0

  jsonBody = ""

  hAdd: boolean = false
  pAdd: boolean = false
  bAdd: boolean = false

  onSubmitted: boolean = true
  createStub: boolean = true
  show: boolean = false
  stub: string = ""
  modal: any
  wiremockURL: string = "[wiremock-pcf-url]"
  cURL: string

  reqBodyType: string
  rawType: string
  rawTypes = ["text", "JSON"]
  body: any = []
  savebody: boolean = true

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    let stack = document.querySelector<Element>(".stack") as HTMLElement;

    stack.addEventListener("click", swap);

    function swap(e: any) {
      let card = document.querySelector(".cardWire:last-child") as HTMLElement;
      //console.log(card)
      if (e.target !== card) return;
      card.style.animation = "swap 700ms forwards";

      setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
      }, 700);
    }
  }

  onSubmit() {
    let request = new Request(this.urlpattern, this.httpMethod, "", "", this.body);
    let response = new Response(this.statusCode, this.jsonBody)

    let paramLink = this.wiremockURL + this.urlpattern.substring(1)
    let headerLink = ""

    if (this.headersList != "") {
      request.headers = JSON.parse("{" + this.headersList.substring(1) + "}");
      for (let i = 0; i < this.list1.length; i++) {
        if (i != (this.list1.length - 1)) {
          headerLink += "--header \'" + this.list1[i].name + ": " + this.list1[i].value + "\' \\"
        }
        else {
          headerLink += "--header \'" + this.list1[i].name + ": " + this.list1[i].value + "\'"
        }
      }
    }
    else if (this.headersList == "") {
      request.headers = {}
    }
    if (this.queryParamsList != "") {
      request.queryParameters = JSON.parse("{" + this.queryParamsList.substring(1) + "}");
      for (let i = 0; i < this.list2.length; i++) {
        if (i == 0) {
          paramLink += "?" + this.list2[0].name + "=" + this.list2[0].value
        }
        else {
          paramLink += "&" + this.list2[i].name + "=" + this.list2[i].value
        }
      }
    }
    else if (this.queryParamsList == "") {
      request.queryParameters = {}
    }

    response.body = this.parseBody(this.jsonBody)

    this.modal = new wiremockModal(request, response)

    //--header 'Content-Type: text/plain' \
    //  this.cURL = "curl --location --request " + this.httpMethod + " \'" + paramLink + "\' \\" + headerLink + " \\n--data-raw \'" + this.reqBody + "\'"
    
    
    // this.cURL = "curl --location --request " + this.httpMethod + " '" + paramLink + "' \n" + headerLink + " " + this.reqBody + ""
    this.cURL = "curl --location --request " + this.httpMethod + " \'" + paramLink + "\' \\\n" + headerLink + " \\\n--data-raw \'" + this.reqBody + "\'"

    this.stub = "The Wiremock Stub Is Created."
    if (this.completeModals[0] == "") {
      this.completeModals.pop()
      this.completeModals.push(new completeModal(this.reqname, this.cURL))
    }
    else {
      this.completeModals.push(new completeModal(this.reqname, this.cURL))
    }

    console.log(this.modal)
    console.log(this.modal.equalToJson)
    this.httpClient.post(this.wiremockURL + "__admin/mappings/new", this.modal).subscribe(response => {
      console.log("request sent")
      this.show = true
      this.reset()
    })
  }

  addHeader() {
    this.hAdd = true
    this.headerEnable = true
  }
  saveHeader() {
    this.headerEnable = false
    this.hAdd = false

    this.addHeaderToList(this.headerName, this.headerMethod, this.headerValue)

    this.headerName = ""
    this.headerMethod = ""
    this.headerValue = ""
    this.headers.clear()
  }
  deleteHeader(headerz: any) {
    let testString = "\"" + headerz.name + "\":{\"" + headerz.type + "\":\"" + headerz.value + "\"}"
    console.log(testString)
    if (this.list1.length == 1) {
      this.headersList = ""
      this.list1.pop();
    }
    else if (this.list1.length > 1) {
      if (this.list1.indexOf(headerz) == 0) {
        this.headersList = this.headersList.replace(testString + ",", "")
      }
      else if (this.list1.indexOf(headerz) == (this.list1.length - 1)) {
        this.headersList = this.headersList.replace("," + testString, "")
      }
      else {
        this.headersList = this.headersList.replace(testString, "")
      }
      this.headersList = this.headersList.replace(",,", ",")
      this.list1 = this.list1.filter(function (x) { return x != headerz })
    }
    else {

    }
  }

  addQueryParam() {
    this.pAdd = true
    this.paramEnable = true
  }
  saveParam() {
    this.paramEnable = false
    this.pAdd = false

    this.addParamToList(this.paramName, this.paraMethod, this.paramValue)

    this.paramName = ""
    this.paraMethod = ""
    this.paramValue = ""
    this.queryParams.clear()
  }
  deleteParam(paramz: any) {
    let testString2 = "\"" + paramz.name + "\":{\"" + paramz.type + "\":\"" + paramz.value + "\"}"

    if (this.list2.length == 1) {
      this.queryParamsList = ""
      this.list2.pop();
    }
    else if (this.list2.length > 1) {

      //this.headersList = this.headersList.replace(x,"")
      if (this.list2.indexOf(paramz) == 0) {
        this.queryParamsList = this.queryParamsList.replace(testString2 + ",", "")
      }
      else if (this.list2.indexOf(paramz) == (this.list2.length - 1)) {
        this.queryParamsList = this.queryParamsList.replace("," + testString2, "")
      }
      else {
        this.queryParamsList = this.queryParamsList.replace(testString2, "")
      }
      this.queryParamsList = this.queryParamsList.replace(",,", ",")
      console.log(this.list2.indexOf(paramz))
      this.list2 = this.list2.filter(function (x) { return x != paramz })
    }
    else {

    }
  }

  addBody() {
    this.bAdd = true

  }
  saveBody() {
    if (this.rawType == "text") {
      this.addHeaderToList("Content-Type", "matches", "text/plain")
      this.body = [{
        "matches": this.reqBody,
        "ignoreArrayOrder": true,
        "ignoreExtraElements": true
      }]
      this.savebody = false
    }
    else if (this.rawType == "JSON") {
      this.addHeaderToList("Content-Type", "matches", "application/json")
      this.body = [{
        "equalToJson": this.reqBody,
        "ignoreArrayOrder": true,
        "ignoreExtraElements": true
      }]
      this.savebody = false
    }
    console.log(this.list1)
  }
  deleteBody() {
    this.bAdd = false

  }

  validateStatus(status: number) {
    if (status == 0) {
      return false;
    }
    else if (status > 99 && status < 600) {
      return false;
    }
    else {
      return true;
    }
  }

  validateBody(JSONbody: string) {

    try {
      //check if the string exists
      if (JSONbody) {
        var body = JSON.parse(JSONbody);

        //validate the result too
        if (body && body.constructor === Object) {
          return false;
        }
        else {
          true;
        }
      }
    }
    catch (error: any) {
      return true;
    }

    return false;

  }

  parseBody(str: string) {
    try {
      var obj = JSON.parse(this.jsonBody);
      let pretty = JSON.stringify(obj, undefined, 4);
      this.jsonBody = pretty;
      return pretty;
    } catch (e) {
      return "{}"
    }
  }

  close() {
    this.show = false
  }

  refresh() {
    setTimeout(function () {
      location.reload()
    }, 35000);
  }

  back() {
    this.createStub = true
  }

  reset() {
    this.reqname = ""
    this.urlpattern = ""
    this.httpMethod = ""
    this.headers.clear()
    this.headersList = ""
    this.queryParams.clear()
    this.queryParamsList = ""
    this.statusCode = 0
    this.jsonBody = ""
    this.list1 = []
    this.list2 = []
  }

  checkType(type: string) {
    if (type == "raw")
      return true;
    else
      return false;
  }

  addHeaderToList(HeaderName: string, HeaderType: string, HeaderValue: string) {
    let innerHeaderMap = new Map()
    innerHeaderMap.set(HeaderType, HeaderValue)

    this.headers.set(HeaderName, innerHeaderMap)

    let changedHeader = JSON.stringify(this.headers).replace("[", "{");
    changedHeader = changedHeader.replace("]", "}");

    let convertedHeaderMap = JSON.stringify(Array.from(innerHeaderMap.entries())).replace("[[", "{").replace("]]", "}").replace(",", ":");

    let finalHeaderMap = JSON.stringify(Array.from(this.headers.entries())).replace("[[", "{").replace("]]", "}").replace(",", ":").replace("],[", ",").replace("{}", convertedHeaderMap)
    //console.log(finalHeaderMap.slice(1,-1))

    this.headersList = this.headersList + "," + (finalHeaderMap.slice(1, -1));

    let item = { name: HeaderName, type: HeaderType, value: HeaderValue }
    this.list1.push(item)

    this.headersList = (this.headersList.replace("}},{", "},"));
  }

  addParamToList(ParamName: string, ParamType: string, ParamValue: string) {
    let innerParaMap = new Map()
    innerParaMap.set(ParamType, ParamValue)

    this.queryParams.set(ParamName, innerParaMap)

    let changedQueryparam = JSON.stringify(this.queryParams).replace("[", "{");
    changedQueryparam = changedQueryparam.replace("]", "}");

    let convertedQueryparamMap = JSON.stringify(Array.from(innerParaMap.entries())).replace("[[", "{").replace("]]", "}").replace(",", ":");


    let finalQueryparamMap = JSON.stringify(Array.from(this.queryParams.entries())).replace("[[", "{").replace("]]", "}").replace(",", ":").replace("],[", ",").replace("{}", convertedQueryparamMap)
    this.queryParamsList = this.queryParamsList + "," + (finalQueryparamMap.slice(1, -1));

    let item = { name: ParamName, type: ParamType, value: ParamValue }
    this.list2.push(item)

    this.queryParamsList = (this.queryParamsList.replace("}},{", "},"));

  }

  copy(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    let clip = document.getElementById("clipboard") as HTMLElement;
    clip.style.color = "#12ABDB";
  }
}

