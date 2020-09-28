/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Rutas2Component } from './v_rutas2.component';

describe('V_Rutas2Component', () => {
  let component: V_Rutas2Component;
  let fixture: ComponentFixture<V_Rutas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Rutas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Rutas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
