import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const progress = [
      {
        "id": 2,
        "title": "Quarter 1",
        "data": [24, 76],
        "labels": ["Done", "Not Done"]
      },
      {
        "id": 3,
        "title": "Quarter 2",
        "data": [52, 48],
        "labels": ["Done", "Not Done"]
      }
    ];

    return {progress}
  }

}
