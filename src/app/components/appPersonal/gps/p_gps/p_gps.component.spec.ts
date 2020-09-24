/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_GpsComponent } from './p_gps.component';

describe('P_GpsComponent', () => {
  let component: P_GpsComponent;
  let fixture: ComponentFixture<P_GpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_GpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_GpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
