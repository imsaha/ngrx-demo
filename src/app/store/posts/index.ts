import { createReducer, on } from "@ngrx/store";
import Post from '../../models/post.model';
import setPosts from './actions/setPosts';
import updateStatus from './actions/updateStatus';
import updatePost from './actions/updatePost';


export type PostsState = {
  posts: Post[],
  saved: boolean;
}

const INIT_POSTS_STATE: PostsState = {
  posts: [],
  saved: false
}

const postsReducer = createReducer(INIT_POSTS_STATE,
  on(setPosts, (state, action) => ({ ...state, posts: action.postsList })),
  on(updateStatus, (state, action) => ({ ...state, saved: action.isSuccess })),
  on(updatePost, (state, action) => {
    const newState = [...state.posts];
    const findIndex = newState.findIndex(x => x.id == action.post.id);
    newState[findIndex] = { ...action.post };
    return { ...state, posts: newState };
  })
)

export default postsReducer;
