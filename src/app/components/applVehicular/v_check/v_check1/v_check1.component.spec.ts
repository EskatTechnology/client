/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_Check1Component } from './v_check1.component';

describe('V_Check1Component', () => {
  let component: V_Check1Component;
  let fixture: ComponentFixture<V_Check1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_Check1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_Check1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
