import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-main-component',
  templateUrl: './a_main.component.html',
  styleUrls: ['./a_main.component.css']
})
export class A_MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Cerrar(){
    this.router.navigate(['/home']);
  }
}
