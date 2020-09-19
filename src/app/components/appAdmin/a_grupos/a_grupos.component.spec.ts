/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A_GruposComponent } from './a_grupos.component';

describe('A_GruposComponent', () => {
  let component: A_GruposComponent;
  let fixture: ComponentFixture<A_GruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A_GruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A_GruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
