/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P_PermisosComponent } from './p_permisos.component';

describe('P_PermisosComponent', () => {
  let component: P_PermisosComponent;
  let fixture: ComponentFixture<P_PermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P_PermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P_PermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
