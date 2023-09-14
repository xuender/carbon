import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { SanitizeHtmlPipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () => {
  let pipe: SanitizeHtmlPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserModule, SanitizeHtmlPipe],
    }).compileComponents();
    pipe = TestBed.inject(SanitizeHtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
