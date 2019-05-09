import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPage } from './paypal.page';

describe('PaypalPage', () => {
  let component: PaypalPage;
  let fixture: ComponentFixture<PaypalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaypalPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
