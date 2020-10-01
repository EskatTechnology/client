import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v_check1',
  templateUrl: './v_check1.component.html',
  styleUrls: ['./v_check1.component.css']
})
export class V_Check1Component implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Staff",    
    "Vehicle",
    "Trailers"    
  ];
  
  ngOnInit() {
  }

}
