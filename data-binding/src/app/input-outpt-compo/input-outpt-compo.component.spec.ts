import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutptCompoComponent } from './input-outpt-compo.component';

describe('InputOutptCompoComponent', () => {
  let component: InputOutptCompoComponent;
  let fixture: ComponentFixture<InputOutptCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutptCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutptCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
