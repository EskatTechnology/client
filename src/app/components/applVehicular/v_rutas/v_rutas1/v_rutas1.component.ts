import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-v_rutas1',
  templateUrl: './v_rutas1.component.html',
  styleUrls: ['./v_rutas1.component.css']
})
export class V_Rutas1Component implements OnInit {

  constructor() { }
  
  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];
  
  model1: NgbDateStruct;
  
  ngOnInit() {
  }

}
