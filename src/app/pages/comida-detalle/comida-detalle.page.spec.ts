import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaDetallePage } from './comida-detalle.page';

describe('ComidaDetallePage', () => {
  let component: ComidaDetallePage;
  let fixture: ComponentFixture<ComidaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
