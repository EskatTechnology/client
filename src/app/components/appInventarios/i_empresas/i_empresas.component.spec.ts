/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_EmpresasComponent } from './i_empresas.component';

describe('I_EmpresasComponent', () => {
  let component: I_EmpresasComponent;
  let fixture: ComponentFixture<I_EmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_EmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_EmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
