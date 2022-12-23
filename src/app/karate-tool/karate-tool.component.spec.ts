import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarateToolComponent } from './karate-tool.component';

describe('KarateToolComponent', () => {
  let component: KarateToolComponent;
  let fixture: ComponentFixture<KarateToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarateToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarateToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
