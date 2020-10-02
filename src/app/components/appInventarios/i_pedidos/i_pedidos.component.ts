import { Component, OnInit } from '@angular/core';

interface Country {
  code: string;
  product: string;
  available: string;
  reserved: string;
  total: string;
}

const COUNTRIES: Country[] = [
  {
    code: '1',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325'
  },
  {
    code: '2',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325'
  },
  {
    code: '3',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325'
  }
];

@Component({
  selector: 'app-i_pedidos',
  templateUrl: './i_pedidos.component.html',
  styleUrls: ['./i_pedidos.component.css']
})
export class I_PedidosComponent implements OnInit {

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
