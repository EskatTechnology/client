import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v_check2',
  templateUrl: './v_check2.component.html',
  styleUrls: ['./v_check2.component.css']
})
export class V_Check2Component implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Staff",    
    "Vehicle",
    "Trailers"    
  ];
  
  ngOnInit() {
  }

}
