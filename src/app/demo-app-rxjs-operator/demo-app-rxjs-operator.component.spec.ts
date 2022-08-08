import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAppRxjsOperatorComponent } from './demo-app-rxjs-operator.component';

describe('DemoAppRxjsOperatorComponent', () => {
  let component: DemoAppRxjsOperatorComponent;
  let fixture: ComponentFixture<DemoAppRxjsOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAppRxjsOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAppRxjsOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
