import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  get appUser() {
    // Mocking the data
    return user;
  }
}

const user = of<User>({ name: 'Jeremy Robson', photoURL: 'assets/jeremy.png' });
