import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPPComponent } from './hpp.component';

describe('HPPComponent', () => {
  let component: HPPComponent;
  let fixture: ComponentFixture<HPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
