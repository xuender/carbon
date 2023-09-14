import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserModule, SafeHtmlPipe],
    }).compileComponents();
    pipe = TestBed.inject(SafeHtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
