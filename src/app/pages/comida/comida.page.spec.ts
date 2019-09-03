import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaPage } from './comida.page';

describe('ComidaPage', () => {
  let component: ComidaPage;
  let fixture: ComponentFixture<ComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
