/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_Permisos2Component } from './p_permisos2.component';

describe('P_Permisos2Component', () => {
  let component: P_Permisos2Component;
  let fixture: ComponentFixture<P_Permisos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_Permisos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_Permisos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
