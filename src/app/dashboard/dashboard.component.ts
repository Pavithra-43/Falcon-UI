import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btn2(){
    console.log("spin")
    var items = document.querySelectorAll('.menuItem')as NodeListOf<HTMLElement>;

    for(var i = 0, l = items.length; i < l; i++) {
      items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
      items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
    let spin=document.querySelector('.center')as HTMLElement;
    spin.onclick = function(e) {
     let spin1=  document.querySelector('.circle')as HTMLElement
       spin1.classList.toggle('open');
    }
  }  


}
