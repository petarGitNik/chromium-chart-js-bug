import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  public url: string = 'api/progress/'

  constructor(private http: HttpClient) { }

  public getProgress(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
