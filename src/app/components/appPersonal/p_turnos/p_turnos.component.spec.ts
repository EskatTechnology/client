/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_TurnosComponent } from './p_turnos.component';

describe('P_TurnosComponent', () => {
  let component: P_TurnosComponent;
  let fixture: ComponentFixture<P_TurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_TurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_TurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
