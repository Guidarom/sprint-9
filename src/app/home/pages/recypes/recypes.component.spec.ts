import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecypesComponent } from './recypes.component';

describe('RecypesComponent', () => {
  let component: RecypesComponent;
  let fixture: ComponentFixture<RecypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
