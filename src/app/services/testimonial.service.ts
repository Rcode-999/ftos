import { Injectable } from '@angular/core';
import { sample_persons } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  getAll():any{
    return sample_persons;
  }
}
