import { Component, OnInit } from '@angular/core';

interface Country {
  code: string;
  product: string;
  location: string;
  cantidad: string;
  measure: string;
}

const COUNTRIES: Country[] = [
  {
    code: '1',
    product: 'Papas de Pollo',
    location: '175',
    cantidad: '25',
    measure: '325'
  },
  {
    code: '2',
    product: 'Papas de Pollo',
    location: '175',
    cantidad: '25',
    measure: '325'
  },
  {
    code: '3',
    product: 'Papas de Pollo',
    location: '175',
    cantidad: '25',
    measure: '325'
  }
];

@Component({
  selector: 'app-i_almacenes',
  templateUrl: './i_almacenes.component.html',
  styleUrls: ['./i_almacenes.component.css']
})
export class I_AlmacenesComponent implements OnInit {

  constructor() { }

  countries = COUNTRIES;

  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular"    
  ];

  ngOnInit() {
  }

}
