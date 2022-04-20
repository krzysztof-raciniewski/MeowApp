import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactEntryComponent } from './fact-entry.component';

describe('FactEntryComponent', () => {
  let component: FactEntryComponent;
  let fixture: ComponentFixture<FactEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
