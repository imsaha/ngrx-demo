import { createAction, props } from "@ngrx/store";
import Post from '../../../models/post.model';

const setPosts = createAction('posts/set', props<{ postsList: Post[] }>());

export default setPosts;
