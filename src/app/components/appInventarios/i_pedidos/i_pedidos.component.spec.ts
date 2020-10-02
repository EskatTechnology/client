/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_PedidosComponent } from './i_pedidos.component';

describe('I_PedidosComponent', () => {
  let component: I_PedidosComponent;
  let fixture: ComponentFixture<I_PedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_PedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
