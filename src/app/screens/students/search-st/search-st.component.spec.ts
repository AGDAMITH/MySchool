import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStComponent } from './search-st.component';

describe('SearchStComponent', () => {
  let component: SearchStComponent;
  let fixture: ComponentFixture<SearchStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
