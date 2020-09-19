import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A_MainComponent } from './a_main.component';

describe('A_MainComponent', () => {
  let component: A_MainComponent;
  let fixture: ComponentFixture<A_MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A_MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A_MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
