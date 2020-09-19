import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-p-employees',
  templateUrl: './p_employees.component.html',
  styleUrls: ['./p_employees.component.css']
})
export class P_EmployeesComponent implements OnInit {

  constructor() { }

  miArray: string[] = [
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario",
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario",
    "Administracion",    
    "Personal",
    "Vehicular",
    "Inventario"
  ];
  
  //@ViewChild('selected') grupo:ElementRef;
  @ViewChild('texto') texto:ElementRef;

  ngOnInit() {
  }


  Buscar(opcion: string){
    console.log( opcion + " " + this.texto.nativeElement.value)
    this.texto.nativeElement.value = "";
    //console.log(this.grupo.nativeElement.value + this.texto.nativeElement.value)
  }


}
