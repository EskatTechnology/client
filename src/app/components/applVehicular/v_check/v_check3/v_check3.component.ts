import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v_check3',
  templateUrl: './v_check3.component.html',
  styleUrls: ['./v_check3.component.css']
})
export class V_Check3Component implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Staff",    
    "Vehicle",
    "Trailers"    
  ];
  
  ngOnInit() {
  }

}
