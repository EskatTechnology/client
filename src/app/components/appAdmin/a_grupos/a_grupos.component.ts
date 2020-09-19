import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-grupos',
  templateUrl: './a_grupos.component.html',
  styleUrls: ['./a_grupos.component.css']
})
export class A_GruposComponent implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Choose",    
    "One",
    "Two",
    "Three"
  ];
  
  ngOnInit() {
  }

 

}
