import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): Observable<User> {
    return user$;
  }
}

// Mocking User Data

const user$ = of<User>({
  displayName: 'Matt',
  photoURL: 'assets/image-avatar.png',
});
