import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './actions'

interface CounterState {
  count: number
}

const DEFAULT_COUNTER_STATE: CounterState = {
  count: 0
}

const counterReducer = createReducer(DEFAULT_COUNTER_STATE,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
)

export { CounterState, DEFAULT_COUNTER_STATE }
export default counterReducer;
