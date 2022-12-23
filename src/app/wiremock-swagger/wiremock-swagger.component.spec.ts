import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiremockSwaggerComponent } from './wiremock-swagger.component';

describe('WiremockSwaggerComponent', () => {
  let component: WiremockSwaggerComponent;
  let fixture: ComponentFixture<WiremockSwaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiremockSwaggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiremockSwaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
