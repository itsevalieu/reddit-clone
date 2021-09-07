import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() link: any;
  defaultThumbnail: string = '/assets/default-thumbnail.png';
  constructor() {}

  ngOnInit(): void {}
}
