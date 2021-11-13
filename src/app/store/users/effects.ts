import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, exhaustMap, catchError, tap, mergeMap, finalize } from 'rxjs/operators';
import User from '../../models/user.model';
import { setUsers, loadUsers } from './actions/index';
import { startLoading, stopLoading } from '../ui/actions/index';
import { Store } from '@ngrx/store';
import { AppState } from "..";


@Injectable()
export class UsersEffects {
  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private http: HttpClient) {
  }

  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadUsers),
      mergeMap(({ pageIndex }) => {
        this.store.dispatch(startLoading());
        return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?pageIndex=${pageIndex}`)
          .pipe(
            map(users => setUsers({ users })),
            finalize(() => this.store.dispatch(stopLoading())),
          )
      })
    )
  );
}
