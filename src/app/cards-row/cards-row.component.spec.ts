import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRowComponent } from './cards-row.component';

describe('CardsRowComponent', () => {
  let component: CardsRowComponent;
  let fixture: ComponentFixture<CardsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
