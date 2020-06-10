import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeachComponent } from './search-teach.component';

describe('SearchTeachComponent', () => {
  let component: SearchTeachComponent;
  let fixture: ComponentFixture<SearchTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
