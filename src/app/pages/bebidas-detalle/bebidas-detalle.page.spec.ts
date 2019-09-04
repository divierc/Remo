import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasDetallePage } from './bebidas-detalle.page';

describe('BebidasDetallePage', () => {
  let component: BebidasDetallePage;
  let fixture: ComponentFixture<BebidasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
