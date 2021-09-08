import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LinkComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() link: any;
  defaultThumbnail: string = '/assets/default-thumbnail.png';
  constructor() {}

  ngOnInit(): void {}
}
