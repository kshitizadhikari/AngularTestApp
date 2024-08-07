import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'Posts';

  @Input() fromParent: string = '';

  constructor() {}

  ngOnInit(): void {}
}
