import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormGasPriceComponent } from './input-form-gas-price.component';

describe('InputFormGasPriceComponent', () => {
  let component: InputFormGasPriceComponent;
  let fixture: ComponentFixture<InputFormGasPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormGasPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormGasPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
