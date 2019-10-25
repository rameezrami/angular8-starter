import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }
  getSample(){
    return [
      "This","is", "an", "array", "from", "the", "service", "function"
    ]
  }
}
