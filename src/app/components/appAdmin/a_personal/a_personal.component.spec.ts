/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A_PersonalComponent } from './a_personal.component';

describe('A_PersonalComponent', () => {
  let component: A_PersonalComponent;
  let fixture: ComponentFixture<A_PersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A_PersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A_PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
