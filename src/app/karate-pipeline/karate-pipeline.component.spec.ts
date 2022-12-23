import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaratePipelineComponent } from './karate-pipeline.component';

describe('KaratePipelineComponent', () => {
  let component: KaratePipelineComponent;
  let fixture: ComponentFixture<KaratePipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaratePipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaratePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
