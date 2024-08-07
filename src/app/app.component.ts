import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  toNav: string = 'hello nav from app';
  googleLink: string = 'https://www.google.com';
  @ViewChild(PostComponent) postComp!: PostComponent;
  firstPost: string = '';
  constructor() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstPost = this.postComp.myPost;
    });
  }
}
