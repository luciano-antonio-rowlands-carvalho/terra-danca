import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaCriancasComponent } from './para-criancas.component';

describe('ParaCriancasComponent', () => {
  let component: ParaCriancasComponent;
  let fixture: ComponentFixture<ParaCriancasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaCriancasComponent]
    });
    fixture = TestBed.createComponent(ParaCriancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
