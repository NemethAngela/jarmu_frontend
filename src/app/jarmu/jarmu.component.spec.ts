import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarmuComponent } from './jarmu.component';

describe('JarmuComponent', () => {
  let component: JarmuComponent;
  let fixture: ComponentFixture<JarmuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JarmuComponent]
    });
    fixture = TestBed.createComponent(JarmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
