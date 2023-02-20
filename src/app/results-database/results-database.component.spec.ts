import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDatabaseComponent } from './results-database.component';

describe('ResultsDatabaseComponent', () => {
  let component: ResultsDatabaseComponent;
  let fixture: ComponentFixture<ResultsDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
