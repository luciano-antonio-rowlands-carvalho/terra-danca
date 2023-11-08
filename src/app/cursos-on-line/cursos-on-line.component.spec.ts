import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosOnLineComponent } from './cursos-on-line.component';

describe('CursosOnLineComponent', () => {
  let component: CursosOnLineComponent;
  let fixture: ComponentFixture<CursosOnLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosOnLineComponent]
    });
    fixture = TestBed.createComponent(CursosOnLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
