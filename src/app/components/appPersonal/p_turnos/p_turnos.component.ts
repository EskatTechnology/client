import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p_turnos',
  templateUrl: './p_turnos.component.html',
  styleUrls: ['./p_turnos.component.css']
})
export class P_TurnosComponent implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];

  ngOnInit() {
  }

}
