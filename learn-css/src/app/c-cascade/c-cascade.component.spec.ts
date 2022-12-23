import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCascadeComponent } from './c-cascade.component';

describe('CCascadeComponent', () => {
  let component: CCascadeComponent;
  let fixture: ComponentFixture<CCascadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCascadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCascadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
