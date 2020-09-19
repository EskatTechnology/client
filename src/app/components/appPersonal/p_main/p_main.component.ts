import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-main',
  templateUrl: './p_main.component.html',
  styleUrls: ['./p_main.component.css']
})
export class P_MainComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  Cerrar(){
    this.router.navigate(['/home']);
  }
}
