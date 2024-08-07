import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, AfterViewInit {
  item: string = 'Post list item';

  @Output() itemEmitter = new EventEmitter<string>();

  sendItemData() {
    this.itemEmitter.emit(this.item);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
