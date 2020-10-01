/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Check3Component } from './v_check3.component';

describe('V_Check3Component', () => {
  let component: V_Check3Component;
  let fixture: ComponentFixture<V_Check3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Check3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Check3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
