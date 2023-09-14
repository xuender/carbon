import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { HtmlPipe } from './html.pipe';

describe('HtmlPipe', () => {
  let pipe: HtmlPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserModule, HtmlPipe],
    }).compileComponents();
    pipe = TestBed.inject(HtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
