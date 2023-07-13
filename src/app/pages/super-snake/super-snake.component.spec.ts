import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSnakeComponent } from './super-snake.component';

describe('SuperSnakeComponent', () => {
  let component: SuperSnakeComponent;
  let fixture: ComponentFixture<SuperSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperSnakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
