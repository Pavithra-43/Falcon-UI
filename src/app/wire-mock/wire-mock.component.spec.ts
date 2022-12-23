import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireMockComponent } from './wire-mock.component';

describe('WireMockComponent', () => {
  let component: WireMockComponent;
  let fixture: ComponentFixture<WireMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WireMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
