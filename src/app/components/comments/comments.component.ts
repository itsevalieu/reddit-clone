import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any;
  constructor() {}

  ngOnInit(): void {
    console.log('Got the comments in component', this.comments);
  }
}