import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-a-personal',
  templateUrl: './a_personal.component.html',
  styleUrls: ['./a_personal.component.css']
})
export class A_PersonalComponent implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Choose",    
    "One",
    "Two",
    "Three"
  ];

  ngOnInit() {
  }

  selectRow(){
    console.log("row")
  }

  Buscar(opcion: string){
    console.log( opcion )
  }
}
