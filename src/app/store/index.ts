import { combineReducers, ActionReducerMap } from '@ngrx/store'
import uiReducer, { DEFAULT_UI_STATE, UiState } from './ui'
import counterReducer, { CounterState, DEFAULT_COUNTER_STATE } from './counter'
import { UsersState } from './users'
import usersReducer from './users/index';
import { PostsState } from './posts/index';
import postsReducer from './posts/index';

interface AppState {
  ui: UiState,
  counter: CounterState,
  users: UsersState,
  posts: PostsState,
}

const rootReducer: ActionReducerMap<AppState> = {
  ui: uiReducer,
  counter: counterReducer,
  users: usersReducer,
  posts: postsReducer
}

export { AppState }
export default rootReducer;
