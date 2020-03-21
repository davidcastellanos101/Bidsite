import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias2dComponent } from './categorias2d.component';

describe('Categorias2dComponent', () => {
  let component: Categorias2dComponent;
  let fixture: ComponentFixture<Categorias2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categorias2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorias2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
