import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingBoxComponent } from './mapping-box.component';

describe('MappingBoxComponent', () => {
  let component: MappingBoxComponent;
  let fixture: ComponentFixture<MappingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
