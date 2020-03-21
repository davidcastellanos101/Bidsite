import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3dComponent } from './categorias3d.component';

describe('Categorias3dComponent', () => {
  let component: Categorias3dComponent;
  let fixture: ComponentFixture<Categorias3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categorias3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorias3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
