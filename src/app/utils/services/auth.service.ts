import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from '../models/user';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _authStorageService: AuthStorageService) {}

  login(user: User): boolean {
    const credentialsMatch =
      JSON.stringify(user) === JSON.stringify(environment.user);

    if (!credentialsMatch) {
      return false;
    }

    this._authStorageService.storeSessionData(user);

    return true;
  }

  logout(): void {
    this._authStorageService.removeSessionData();
  }

  isLoggedIn(): boolean {
    return Boolean(this._authStorageService.getSession());
  }
}
