import { createAction, props } from '@ngrx/store'
import User from '../../../models/user.model';



export const loadUsers = createAction('users/load', props<{ pageIndex: number }>());
export const setUsers = createAction('users/set', props<{ users: User[] }>())
export const clearUsers = createAction('users/clear')
