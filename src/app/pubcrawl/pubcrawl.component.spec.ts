import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubcrawlComponent } from './pubcrawl.component';

describe('PubcrawlComponent', () => {
  let component: PubcrawlComponent;
  let fixture: ComponentFixture<PubcrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubcrawlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubcrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
