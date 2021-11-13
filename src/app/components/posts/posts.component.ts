import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import Post from 'src/app/models/post.model';
import { savePost, loadPosts } from '../../store/posts/effects';
import { decrement, increment } from 'src/app/store/counter/actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {

  posts$: Observable<Post[]>
  count$: Observable<number>
  constructor(private store: Store<AppState>) {
    this.posts$ = store.select(s => s.posts.posts);
    this.count$ = store.select(s => s.counter.count);
  }

  handlePostsLoad() {
    this.store.dispatch(loadPosts({ pageIndex: 1 }))
  }


  handleSavePost() {
    this.store.dispatch(savePost({ post: { id: 10, title: 'demo post' } }))
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }

  ngOnInit(): void {
    // this.handlePostsLoad();
  }

  ngAfterViewInit() {
    this.handlePostsLoad();
  }

}
