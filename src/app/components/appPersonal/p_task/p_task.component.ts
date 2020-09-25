import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-p_task',
  templateUrl: './p_task.component.html',
  styleUrls: ['./p_task.component.css']
})
export class P_TaskComponent implements OnInit {

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
