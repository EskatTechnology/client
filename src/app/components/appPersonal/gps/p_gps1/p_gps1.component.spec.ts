/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_Gps1Component } from './p_gps1.component';

describe('P_Gps1Component', () => {
  let component: P_Gps1Component;
  let fixture: ComponentFixture<P_Gps1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_Gps1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_Gps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
