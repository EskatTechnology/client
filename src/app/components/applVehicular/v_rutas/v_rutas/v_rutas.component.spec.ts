/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_RutasComponent } from './v_rutas.component';

describe('V_RutasComponent', () => {
  let component: V_RutasComponent;
  let fixture: ComponentFixture<V_RutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_RutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_RutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
