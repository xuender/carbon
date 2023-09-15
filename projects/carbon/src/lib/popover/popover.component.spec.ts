import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { PopoverComponent } from './popover.component';
class MockNavParams {
  data: any = {
    options: {
      title: 'title',
      items: [],
    },
  };

  get(param: string) {
    return this.data[param];
  }
}
describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverComponent],
      imports: [IonicModule],
      providers: [{ provide: NavParams, useClass: MockNavParams }],
    });
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
