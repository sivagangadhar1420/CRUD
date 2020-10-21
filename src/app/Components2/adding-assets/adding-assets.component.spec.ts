import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAssetsComponent } from './adding-assets.component';

describe('AddingAssetsComponent', () => {
  let component: AddingAssetsComponent;
  let fixture: ComponentFixture<AddingAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
