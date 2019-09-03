import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedidaPage } from './bedida.page';

describe('BedidaPage', () => {
  let component: BedidaPage;
  let fixture: ComponentFixture<BedidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
