import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v_main',
  templateUrl: './v_main.component.html',
  styleUrls: ['./v_main.component.css']
})
export class V_MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Cerrar(){
    this.router.navigate(['/home']);
  }
}
