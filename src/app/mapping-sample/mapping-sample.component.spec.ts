import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingSampleComponent } from './mapping-sample.component';

describe('MappingSampleComponent', () => {
  let component: MappingSampleComponent;
  let fixture: ComponentFixture<MappingSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
