/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_MainComponent } from './p_main.component';

describe('P_MainComponent', () => {
  let component: P_MainComponent;
  let fixture: ComponentFixture<P_MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
