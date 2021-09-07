import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() link: any;
  defaultThumbnail: string = '/assets/default-thumbnail.png';
  constructor() {}

  ngOnInit(): void {}
}
