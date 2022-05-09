import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacornerComponent } from './mediacorner.component';

describe('MediacornerComponent', () => {
  let component: MediacornerComponent;
  let fixture: ComponentFixture<MediacornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediacornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
