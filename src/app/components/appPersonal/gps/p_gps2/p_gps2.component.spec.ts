/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_Gps2Component } from './p_gps2.component';

describe('P_Gps2Component', () => {
  let component: P_Gps2Component;
  let fixture: ComponentFixture<P_Gps2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_Gps2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_Gps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
