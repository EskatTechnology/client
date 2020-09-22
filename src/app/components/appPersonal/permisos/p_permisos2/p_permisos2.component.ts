import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

interface Country {
  name: string;
  reason: string;
  date: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    reason: 'Enfermedad',
    date: '19/09/2020'
  },
  {
    name: 'Canada',
    reason: 'Enfermedad',
    date: '19/09/2020'
  },
  {
    name: 'United States',
    reason: 'Enfermedad',
    date: '19/09/2020'
  },
  {
    name: 'China',
    reason: 'Enfermedad',
    date: '19/09/2020'
  }
];

@Component({
  selector: 'app-p_permisos2',
  templateUrl: './p_permisos2.component.html',
  styleUrls: ['./p_permisos2.component.css']
})
export class P_Permisos2Component implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];
  
  countries = COUNTRIES;
  model1: NgbDateStruct;
  model2: NgbDateStruct;

  ngOnInit() {
  }

}
