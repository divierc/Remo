import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMeseroPage } from './pedido-mesero.page';

describe('PedidoMeseroPage', () => {
  let component: PedidoMeseroPage;
  let fixture: ComponentFixture<PedidoMeseroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMeseroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMeseroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
