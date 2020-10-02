/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_AlmacenesComponent } from './i_almacenes.component';

describe('I_AlmacenesComponent', () => {
  let component: I_AlmacenesComponent;
  let fixture: ComponentFixture<I_AlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_AlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_AlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
