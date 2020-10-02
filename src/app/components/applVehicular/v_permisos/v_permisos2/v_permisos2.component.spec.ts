/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Permisos2Component } from './v_permisos2.component';

describe('V_Permisos2Component', () => {
  let component: V_Permisos2Component;
  let fixture: ComponentFixture<V_Permisos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Permisos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Permisos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
