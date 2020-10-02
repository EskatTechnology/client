/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_MainComponent } from './i_main.component';

describe('I_MainComponent', () => {
  let component: I_MainComponent;
  let fixture: ComponentFixture<I_MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
