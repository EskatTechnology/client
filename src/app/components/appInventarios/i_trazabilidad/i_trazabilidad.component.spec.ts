/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_TrazabilidadComponent } from './i_trazabilidad.component';

describe('I_TrazabilidadComponent', () => {
  let component: I_TrazabilidadComponent;
  let fixture: ComponentFixture<I_TrazabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_TrazabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_TrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
