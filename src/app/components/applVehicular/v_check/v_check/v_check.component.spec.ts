/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_CheckComponent } from './v_check.component';

describe('V_CheckComponent', () => {
  let component: V_CheckComponent;
  let fixture: ComponentFixture<V_CheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_CheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
