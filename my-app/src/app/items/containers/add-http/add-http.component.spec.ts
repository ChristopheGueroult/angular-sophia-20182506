import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHttpComponent } from './add-http.component';

describe('AddHttpComponent', () => {
  let component: AddHttpComponent;
  let fixture: ComponentFixture<AddHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
