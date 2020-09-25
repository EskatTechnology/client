/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_TaskComponent } from './p_task.component';

describe('P_TaskComponent', () => {
  let component: P_TaskComponent;
  let fixture: ComponentFixture<P_TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_TaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
