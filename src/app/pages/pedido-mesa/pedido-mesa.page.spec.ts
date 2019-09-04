import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMesaPage } from './pedido-mesa.page';

describe('PedidoMesaPage', () => {
  let component: PedidoMesaPage;
  let fixture: ComponentFixture<PedidoMesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
