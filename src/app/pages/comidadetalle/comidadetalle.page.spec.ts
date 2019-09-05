import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidadetallePage } from './comidadetalle.page';

describe('ComidadetallePage', () => {
  let component: ComidadetallePage;
  let fixture: ComponentFixture<ComidadetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidadetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidadetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
