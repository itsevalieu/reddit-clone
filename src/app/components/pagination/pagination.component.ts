import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() after: string = '';
  @Input() before: string = '';
  @Input() count: number = 0;
  @Output() showNewListings = new EventEmitter();

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    console.log('OnInit Before: ', this.before);
    console.log('OnInit After: ', this.after);
  }
  ngOnChange(): void {
    console.log('Before: ', this.before);
    console.log('After: ', this.after);
  }
  getPreviousListings(before: string) {
    this.listingService
      .getPreviousListing('all', this.count, before)
      .subscribe((res) => {
        console.log('GOT PREVIOUS LISTING: ', res.data);
        res.data.count = this.count - 10;
        this.showNewListings.emit(res.data);
      });
  }
  getNextListings(after: string) {
    this.listingService
      .getNextListing('all', this.count, after)
      .subscribe((res) => {
        console.log('GOT NEXT LISTING: ', res.data);
        res.data.count = this.count + 10;
        this.showNewListings.emit(res.data);
      });
  }
}
