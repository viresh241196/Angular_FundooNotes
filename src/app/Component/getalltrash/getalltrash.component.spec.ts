import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltrashComponent } from './getalltrash.component';

describe('GetalltrashComponent', () => {
  let component: GetalltrashComponent;
  let fixture: ComponentFixture<GetalltrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalltrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
