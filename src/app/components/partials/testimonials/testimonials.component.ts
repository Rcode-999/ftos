import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  constructor(private testimonialService:TestimonialService){}

  persons = this.testimonialService.getAll();
}
