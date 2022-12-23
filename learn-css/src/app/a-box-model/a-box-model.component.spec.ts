import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABoxModelComponent } from './a-box-model.component';

describe('ABoxModelComponent', () => {
  let component: ABoxModelComponent;
  let fixture: ComponentFixture<ABoxModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABoxModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
