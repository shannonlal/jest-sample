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

  it('should render snapshot component with one name', () => {

    component.phones = ['TestPhone'];
    fixture.detectChanges();

    expect( fixture ).toMatchSnapshot();
  });

  it('should render snapshot component with 3 phones', () => {

    component.phones = ['TestPhone', 'Test Phone B', 'Test Phone C'];
    fixture.detectChanges();

    expect( fixture ).toMatchSnapshot();
  });

  it('should render component with one phone', () => {

    component.phones = ['TestPhone'];
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const pTags = element.querySelectorAll('p');
    expect( pTags.length ).toBe(1);
  });

  it('should render component with one phone', () => {

    component.phones = ['TestPhone', 'Phone B', 'Phone C'];
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const pTags = element.querySelectorAll('p');
    expect( pTags.length ).toBe(3);
  });

});
