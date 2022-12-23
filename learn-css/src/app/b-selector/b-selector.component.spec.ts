import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSelectorComponent } from './b-selector.component';

describe('BSelectorComponent', () => {
  let component: BSelectorComponent;
  let fixture: ComponentFixture<BSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
