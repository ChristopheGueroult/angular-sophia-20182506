import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactComponent } from './add-react.component';

describe('AddReactComponent', () => {
  let component: AddReactComponent;
  let fixture: ComponentFixture<AddReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
