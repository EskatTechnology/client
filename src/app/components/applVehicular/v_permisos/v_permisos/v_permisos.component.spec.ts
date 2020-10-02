/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V_PermisosComponent } from './v_permisos.component';

describe('V_PermisosComponent', () => {
  let component: V_PermisosComponent;
  let fixture: ComponentFixture<V_PermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V_PermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V_PermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
