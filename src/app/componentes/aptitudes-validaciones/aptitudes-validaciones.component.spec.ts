import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesValidacionesComponent } from './aptitudes-validaciones.component';

describe('AptitudesValidacionesComponent', () => {
  let component: AptitudesValidacionesComponent;
  let fixture: ComponentFixture<AptitudesValidacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudesValidacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudesValidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
