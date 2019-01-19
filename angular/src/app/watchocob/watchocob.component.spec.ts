import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchocobComponent } from './watchocob.component';

describe('WatchocobComponent', () => {
  let component: WatchocobComponent;
  let fixture: ComponentFixture<WatchocobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchocobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchocobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
