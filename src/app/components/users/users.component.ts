import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import User from 'src/app/models/user.model';
import { loadUsers } from '../../store/users/actions/index';
import { startLoading, stopLoading } from '../../store/ui/actions/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  users$: Observable<User[]>;
  pageIndex: number = 1;
  constructor(private store: Store<AppState>) {
    this.users$ = store.select(s => s.users.users);
  }

  handleUsersLoad() {
    this.store.dispatch(loadUsers({ pageIndex: this.pageIndex }));
  }

  nextPage() {
    this.pageIndex++;
    this.handleUsersLoad();
  }

  previousPage() {
    if (this.pageIndex <= 1) {
      this.pageIndex = 1;
    } else {
      this.pageIndex--;
    }

    this.handleUsersLoad();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.handleUsersLoad();
  }

}
