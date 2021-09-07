import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListingService } from '../../services/listing.service';

export interface IListingResponse {
  after?: string;
  before?: string;
  children: Object[];
  dist: number;
  count: number;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  private _listingState = new BehaviorSubject<IListingResponse>({
    after: '',
    before: '',
    children: [],
    dist: 0,
    count: 0,
  });

  listingData: Observable<IListingResponse> = this._listingState.asObservable();

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    let state: IListingResponse = this.getState();
    console.log('Initial state', state);
    this.getListing('all');
  }
  protected getState(): IListingResponse {
    return this._listingState.getValue();
  }
  getListing(listing: string) {
    this.listingService.getNextListing(listing).subscribe((res) => {
      // console.log('Received new data', res.data);
      let state: IListingResponse = this.getState();
      state.after = res.data.after;
      state.before = res.data.before;
      state.children = res.data.children;
      state.dist = res.data.dist;
      state.count = 10;

      this._listingState.next(state);
      // console.log('New state', state);
    });
  }
  getNewListings(event: any) {
    // console.log('THE NEW LIST???', event);
    let state: IListingResponse = this.getState();
    console.log('Previous listing:', state);
    state.after = event.after;
    state.before = event.before;
    state.children = event.children;
    state.dist = event.dist;
    state.count = event.count;

    this._listingState.next(state);
    console.log('New listing: ', state);
  }
}
