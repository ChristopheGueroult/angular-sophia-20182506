import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHttpComponent } from './item-http.component';

describe('ItemHttpComponent', () => {
  let component: ItemHttpComponent;
  let fixture: ComponentFixture<ItemHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
