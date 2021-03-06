import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeComponent } from './st-home.component';

describe('StHomeComponent', () => {
  let component: StHomeComponent;
  let fixture: ComponentFixture<StHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
