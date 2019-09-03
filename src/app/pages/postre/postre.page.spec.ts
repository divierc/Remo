import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrePage } from './postre.page';

describe('PostrePage', () => {
  let component: PostrePage;
  let fixture: ComponentFixture<PostrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
