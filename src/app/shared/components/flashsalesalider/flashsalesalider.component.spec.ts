import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashsalesaliderComponent } from './flashsalesalider.component';

describe('FlashsalesaliderComponent', () => {
  let component: FlashsalesaliderComponent;
  let fixture: ComponentFixture<FlashsalesaliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashsalesaliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashsalesaliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
