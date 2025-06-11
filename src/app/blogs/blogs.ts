import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
  awards = [
    {
      title: 'Bright Beginner of the Year',
      duration: '2021-22',
      organization: 'Technogenesis Software Solutions Pvt Ltd',
      description:
        'Recognized for outstanding performance and rapid learning as a newcomer, demonstrating strong problem-solving skills and a proactive approach to tackling challenges.',
    },
    {
      title: 'Budding Techie of the Year',
      duration: '2022-23',
      organization: 'Technogenesis Software Solutions Pvt Ltd',
      description:
        'Awarded for significant technical contributions, innovation, and continuous skill enhancement, showcasing expertise in developing scalable and efficient solutions.',
    },
    {
      title: 'Best Contributor ',
      duration: '11 February 2025',
      organization: 'Client Organization, Chennai',
      description:
        'Received recognition from the client as the Best Contributor during the PrintApp launch event in Chennai held on Thai Poosam (Thaipoosam full moon) 2025.',
    }
  ]
  
}
