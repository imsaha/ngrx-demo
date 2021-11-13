import { createReducer, on } from '@ngrx/store'
import { startLoading, stopLoading } from './actions'

interface UiState {
  loading: boolean
}

const DEFAULT_UI_STATE: UiState = {
  loading: false
}

const uiReducer = createReducer(DEFAULT_UI_STATE,
  on(startLoading, state => ({ ...state, loading: true })),
  on(stopLoading, state => ({ ...state, loading: false })),
)
export { UiState, DEFAULT_UI_STATE }
export default uiReducer;
