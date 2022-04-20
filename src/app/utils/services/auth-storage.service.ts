import { Injectable } from '@angular/core';

import { Session } from '../models/session';
import { User } from '../models/user';

const SESSION_STORAGE_KEY = 'session';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  storeSessionData(user: User): void {
    localStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({
        login: user.email,
        date: new Date().toISOString(),
      } as Session)
    );
  }

  removeSessionData(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  getSession(): Session | null {
    const sessionString = localStorage.getItem(SESSION_STORAGE_KEY);

    if (!sessionString || !sessionString.length) {
      return null;
    }

    return JSON.parse(sessionString) as Session;
  }
}
