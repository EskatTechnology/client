/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Permisos1Component } from './v_permisos1.component';

describe('V_Permisos1Component', () => {
  let component: V_Permisos1Component;
  let fixture: ComponentFixture<V_Permisos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Permisos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Permisos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
