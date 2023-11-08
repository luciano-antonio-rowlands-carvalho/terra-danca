import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencoesArtisticasComponent } from './intervencoes-artisticas.component';

describe('IntervencoesArtisticasComponent', () => {
  let component: IntervencoesArtisticasComponent;
  let fixture: ComponentFixture<IntervencoesArtisticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervencoesArtisticasComponent]
    });
    fixture = TestBed.createComponent(IntervencoesArtisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
