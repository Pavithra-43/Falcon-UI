import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializrFormComponent } from './initializr-form.component';

describe('InitializrFormComponent', () => {
  let component: InitializrFormComponent;
  let fixture: ComponentFixture<InitializrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitializrFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
