import { Component, OnInit } from '@angular/core';
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
  },
  {
    name: 'China',
    reason: 'Enfermedad',
    date: '19/09/2020'
  },
  {
    name: 'China',
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
  selector: 'app-v_rutas2',
  templateUrl: './v_rutas2.component.html',
  styleUrls: ['./v_rutas2.component.css']
})
export class V_Rutas2Component implements OnInit {

  constructor() { }

  lat = 51.678418;
  lng = 7.809007;
  
  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];
  
  countries = COUNTRIES;

  ngOnInit() {
  }

}
