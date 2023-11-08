import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaAdultosComponent } from './para-adultos.component';

describe('ParaAdultosComponent', () => {
  let component: ParaAdultosComponent;
  let fixture: ComponentFixture<ParaAdultosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaAdultosComponent]
    });
    fixture = TestBed.createComponent(ParaAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
