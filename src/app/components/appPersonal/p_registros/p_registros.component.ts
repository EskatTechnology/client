import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p_registros',
  templateUrl: './p_registros.component.html',
  styleUrls: ['./p_registros.component.css']
})
export class P_RegistrosComponent implements OnInit {

  constructor() { }

  miArray1: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];

  ngOnInit() {
  }

  Buscar(opcion: string){
    console.log( opcion + " ");
  }
}
