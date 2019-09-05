import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidadetallePage } from './bebidadetalle.page';

describe('BebidadetallePage', () => {
  let component: BebidadetallePage;
  let fixture: ComponentFixture<BebidadetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidadetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidadetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
