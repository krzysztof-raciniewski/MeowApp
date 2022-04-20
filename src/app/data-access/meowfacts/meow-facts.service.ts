import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, zip } from 'rxjs';

import { MeowFact } from '../../../app/utils/models/meow-fact';
import { environment } from '../../../environments/environment';

@Injectable()
export class MeowFactsService {
  constructor(private readonly _httpClient: HttpClient) {}

  getFacts(count = 10): Observable<string[]> {
    const request$ = this._httpClient
      .get<MeowFact>(environment.apiUrl)
      .pipe(map((value) => value.data[0]));

    const requests: Observable<string>[] = [];
    console.log(Array.from(Array(count).keys()));
    for (let i = 0; i < count; i++) {
      requests.push(request$);
    }

    return zip(requests).pipe(map(this.distinct));
  }

  private distinct(array: string[]): string[] {
    return array.filter(
      (thing, i, arr) => arr.findIndex((t) => t === thing) === i
    );
  }
}
