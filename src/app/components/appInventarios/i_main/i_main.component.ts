import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-i_main',
  templateUrl: './i_main.component.html',
  styleUrls: ['./i_main.component.css']
})
export class I_MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Cerrar(){
    this.router.navigate(['/home']);
  }
}
