/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I_StockComponent } from './i_stock.component';

describe('I_StockComponent', () => {
  let component: I_StockComponent;
  let fixture: ComponentFixture<I_StockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I_StockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I_StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
