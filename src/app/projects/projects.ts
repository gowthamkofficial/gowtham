import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  angularProjects = [
    {
      title: 'Buywoods.in',
      technologies: [
        'Angular 9',
        'RxJS',
        'HTML5',
        'CSS3',
        'TypeScript',
        'Paytm Integration',
        'Firebase Cloud Messaging',
        'Git',
        'Postman', 
        'Angular CLI',
      ],
      description: [
        'Developed a website and CRM for a wood retailer.',
        'Integrated Paytm for payments and Firebase for push notifications.',
        'Built an Admin Panel for managing stock, employees, and campaigns.',
        'Developed Reports and Catalogue Modules with dynamic filtering and real-time updates.',
        'Users can upload photos, apply filters, and choose payment options (Online or COD).',
        'Implemented custom pricing calculations and reusable Angular components.',
        'Collaborated with backend teams for API integration and responsive design.',
      ],
    },
    {
      title: 'NRI Infotech',
      technologies: [
        'Angular 9',
        'RxJS',
        'HTML5',
        'CSS3',
        'TypeScript',
        'Razorpay Integration',
        'Git',
        'Postman',
        'Angular CLI',
      ],
      description: [
        'Developed a wholesale platform for computer accessories.',
        'Built an Admin Panel for order tracking, catalog management, and reporting.',
        'Implemented real-time updates and filtering for catalog and order data.',
        'Integrated Razorpay for secure online payments.',
        'Collaborated with backend and ensured full responsiveness.',
      ],
      website: 'https://www.nrinfotechworld.com/',
    },
    {
      title: 'Puppys Bakery',
      technologies: [
        'Angular 12',
        'RxJS',
        'HTML5',
        'CSS3',
        'TypeScript',
        'Razorpay Integration',
        'Shiprocket',
        'Git',
        'Postman',
        'Angular CLI',
        'Swagger',
      ],
      description: [
        'Developed an e-commerce site for a bakery.',
        'Integrated Razorpay for payments and Shiprocket for shipping.',
        'Created an Admin Panel with CSV import, dashboards, and tracking.',
        'Implemented Swagger for API documentation and testing.',
        'Optimized for both desktop and mobile experiences.',
      ],
      website: 'https://puppysbakery.com/',
    },
    {
      title: 'Print App',
      technologies: [
        'Angular 12',
        'RxJS',
        'TypeScript',
        'HTML5',
        'CSS3',
        'jQuery (CDN)',
        'Firebase (Auth, Firestore)',
        'WebSockets',
        'Paytm Integration',
        'Firebase Push Notifications',
        'Git',
        'Postman',
        'Angular CLI',
      ],
      features: [
        'Social Share, Google/Facebook Sign-in',
        'WebSocket-based real-time chat (text, audio, image, video)',
        'Admin Panel: Order tracking, Catalog Management, Reporting, Kanban Board',
      ],
      description: [
        'Built a platform for ordering photo-related products.',
        'Integrated WebSocket-based real-time chat.',
        'Added social logins and sharing features.',
        'Created a custom Admin Panel with Kanban Board for task management.',
        'Used jQuery CDN for custom UI components like carousels.',
      ],
    },
    {
      title: 'MIS Legal Management',
      technologies: [
        'Angular 14',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'Swagger',
        'Git',
        'Postman',
        'Angular CLI',
      ],
      features: [
        'Dynamic Forms with reusable components',
        'Custom Validators and Pipes',
        'Reactive Form Handling',
      ],
      description: [
        'Built a secure Admin Panel for legal data management.',
        'Implemented dynamic forms with client-specific logic.',
        'Used Angular Material for modern UI.',
        'Integrated Swagger for API documentation.',
        'Developed custom pipes for efficient UI updates.',
      ],
      website: 'https://misreport.in/',
    },
    {
      title: 'Accupayd Payout',
      technologies: [
        'Angular 15',
        'TypeScript',
        'RxJS',
        'Cashfree (Money Transfer)',
        'Git',
        'Postman',
        'Angular CLI',
      ],
      features: [
        'Secure rent payment system',
        'High security standards with encryption',
        'Multi-form handling with validation',
      ],
      description: [
        'Developed a fintech app for seamless payouts.',
        'Integrated Cashfree for rent and commission-based transfers.',
        'Ensured high-level data security and encryption.',
        'Built multiple user-friendly forms with validation.',
      ],
      website: 'https://admin.truefee.in/',
    },
  ];
}
