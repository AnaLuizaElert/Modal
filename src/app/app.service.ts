import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {   }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>('https://random-d.uk/api/random');
  }
}
