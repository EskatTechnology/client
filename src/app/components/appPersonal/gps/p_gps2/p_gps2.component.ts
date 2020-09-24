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
  }
];

@Component({
  selector: 'app-p_gps2',
  templateUrl: './p_gps2.component.html',
  styleUrls: ['./p_gps2.component.css']
})
export class P_Gps2Component implements OnInit {

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
