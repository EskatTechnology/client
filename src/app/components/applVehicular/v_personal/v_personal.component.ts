import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v_personal',
  templateUrl: './v_personal.component.html',
  styleUrls: ['./v_personal.component.css']
})
export class V_PersonalComponent implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Staff",    
    "Vehicle",
    "Trailers"    
  ];

  ngOnInit() {
  }

}
