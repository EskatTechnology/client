/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Rutas1Component } from './v_rutas1.component';

describe('V_Rutas1Component', () => {
  let component: V_Rutas1Component;
  let fixture: ComponentFixture<V_Rutas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Rutas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Rutas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
