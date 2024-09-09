import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetaliesComponent } from './productdetalies.component';

describe('ProductdetaliesComponent', () => {
  let component: ProductdetaliesComponent;
  let fixture: ComponentFixture<ProductdetaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdetaliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductdetaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
