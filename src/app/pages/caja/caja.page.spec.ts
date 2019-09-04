import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPage } from './caja.page';

describe('CajaPage', () => {
  let component: CajaPage;
  let fixture: ComponentFixture<CajaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
