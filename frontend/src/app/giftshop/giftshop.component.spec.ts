import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftshopComponent } from './giftshop.component';

describe('GiftshopComponent', () => {
  let component: GiftshopComponent;
  let fixture: ComponentFixture<GiftshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
