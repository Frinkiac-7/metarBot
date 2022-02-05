import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetartafComponent } from './metartaf.component';

describe('MetartafComponent', () => {
  let component: MetartafComponent;
  let fixture: ComponentFixture<MetartafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetartafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetartafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
