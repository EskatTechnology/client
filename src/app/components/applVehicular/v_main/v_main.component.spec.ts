/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_MainComponent } from './v_main.component';

describe('V_MainComponent', () => {
  let component: V_MainComponent;
  let fixture: ComponentFixture<V_MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
