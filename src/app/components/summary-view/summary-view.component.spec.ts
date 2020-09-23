import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryViewComponent } from './summary-view.component';

describe('SummaryViewComponent', () => {
  let component: SummaryViewComponent;
  let fixture: ComponentFixture<SummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create summary-view component', () => {
    expect(component).toBeTruthy();
  });

  it('should render component with one name', () => {

    component.phones = ['TestPhone'];
    fixture.detectChanges();

    expect( fixture ).toMatchSnapshot();
  });

});
