import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonComponent } from './carbon.component';

describe('CarbonComponent', () => {
  let component: CarbonComponent;
  let fixture: ComponentFixture<CarbonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonComponent]
    });
    fixture = TestBed.createComponent(CarbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
