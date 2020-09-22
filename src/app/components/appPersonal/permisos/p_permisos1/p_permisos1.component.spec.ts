/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_Permisos1Component } from './p_permisos1.component';

describe('P_Permisos1Component', () => {
  let component: P_Permisos1Component;
  let fixture: ComponentFixture<P_Permisos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_Permisos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_Permisos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
