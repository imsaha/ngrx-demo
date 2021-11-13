import { createReducer, on } from '@ngrx/store'
import User from 'src/app/models/user.model'
import { setUsers, clearUsers } from './actions'

interface UsersState {
  users: User[]
}

const DEFAULT_USERS_STATE: UsersState = {
  users: []
}

const usersReducer = createReducer(DEFAULT_USERS_STATE,
  on(setUsers, (state, { users }) => ({ ...state, users })),
  on(clearUsers, state => ({ ...state, users: [] })),
)
export { UsersState, DEFAULT_USERS_STATE }
export default usersReducer;
