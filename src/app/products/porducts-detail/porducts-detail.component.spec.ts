import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductsDetailComponent } from './porducts-detail.component';

describe('PorductsDetailComponent', () => {
  let component: PorductsDetailComponent;
  let fixture: ComponentFixture<PorductsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorductsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
