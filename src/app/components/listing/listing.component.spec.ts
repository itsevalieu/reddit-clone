import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list links', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listing shows');
  });
});

/**
 * should list the same number of links as links available from api call
 */
