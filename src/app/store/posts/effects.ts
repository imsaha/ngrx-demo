import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from "..";
import { HttpClient } from '@angular/common/http';
import setPosts from './actions/setPosts';
import { of } from "rxjs";
import { mergeMap, map, finalize } from 'rxjs/operators';
import Post from '../../models/post.model';
import { stopLoading, startLoading } from '../ui/actions/index';
import updateStatus from './actions/updateStatus';
import { createAction, props } from '@ngrx/store';
import updatePost from './actions/updatePost';

export const savePost = createAction('posts/save', props<{ post: Post }>());
export const loadPosts = createAction('posts/load', props<{ pageIndex: number }>());

@Injectable()
export default class PostsEffects {
  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private http: HttpClient) {

  }


  savePost$ = createEffect(() => {
    return this.actions.pipe(
      ofType(savePost),
      mergeMap(({ post }) => {
        this.store.dispatch(startLoading())
        return this.http.post('https://jsonplaceholder.typicode.com/posts', post).pipe(
          map(postsResponse => updatePost({ post })),
          finalize(() => this.store.dispatch(stopLoading()))
        );
      })
    )
  })


  loadPosts$ = createEffect(() => {
    return this.actions.pipe(
      ofType(loadPosts),
      mergeMap(action => {
        this.store.dispatch(startLoading())
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
          map(postsResponse => setPosts({ postsList: postsResponse })),
          finalize(() => this.store.dispatch(stopLoading()))
        );
      })
    )
  })
}
