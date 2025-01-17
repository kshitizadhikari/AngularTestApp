import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  myPost: string = 'first post here';

  itemData: string = '';

  receiveItem($e: string) {
    this.itemData = $e;
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
