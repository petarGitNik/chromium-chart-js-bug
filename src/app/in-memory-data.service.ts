import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const progress = [
      {
        "course_id": 2,
        "course_title": "Quarter 1",
        "course_data": [24, 76],
        "course_data_labels": ["Done", "Not Done"]
      },
      {
        "course_id": 3,
        "course_title": "Quarter 2",
        "course_data": [52, 48],
        "course_data_labels": ["Done", "Not Done"]
      }
    ];

    return {progress}
  }

}
