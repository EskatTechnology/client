/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_DespachosComponent } from './i_despachos.component';

describe('I_DespachosComponent', () => {
  let component: I_DespachosComponent;
  let fixture: ComponentFixture<I_DespachosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_DespachosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_DespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
