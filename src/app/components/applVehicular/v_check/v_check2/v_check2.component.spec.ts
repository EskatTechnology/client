/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Check2Component } from './v_check2.component';

describe('V_Check2Component', () => {
  let component: V_Check2Component;
  let fixture: ComponentFixture<V_Check2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Check2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Check2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
