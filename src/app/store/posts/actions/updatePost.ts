import { createAction, props } from "@ngrx/store";
import Post from '../../../models/post.model';

const updatePost = createAction('posts/update', props<{ post: Post }>());

export default updatePost;
