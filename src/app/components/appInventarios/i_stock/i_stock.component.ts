import { Component, OnInit } from '@angular/core';

interface Country {
  code: string;
  product: string;
  available: string;
  reserved: string;
  total: string;
  measure: string;
}

const COUNTRIES: Country[] = [
  {
    code: '1',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325',
    measure: 'Unit'
  },
  {
    code: '2',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325',
    measure: 'Unit'
  },
  {
    code: '3',
    product: 'Papas de Pollo',
    available: '175',
    reserved: '25',
    total: '325',
    measure: 'Unit'
  }
];

@Component({
  selector: 'app-i_stock',
  templateUrl: './i_stock.component.html',
  styleUrls: ['./i_stock.component.css']
})
export class I_StockComponent implements OnInit {

  constructor() { }

  countries = COUNTRIES;
  
  ngOnInit() {
  }

}
