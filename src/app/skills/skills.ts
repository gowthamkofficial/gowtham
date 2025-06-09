import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    // --- Frontend Skills ---
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'TypeScript', icon: 'fa-solid fa-code' },
    { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-js' },
    { name: 'React.js', icon: 'fa-brands fa-react', level: 'Intermediate' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'SCSS / SASS', icon: 'fa-solid fa-palette' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'Angular Material', icon: 'fa-solid fa-layer-group' },
    { name: 'Responsive Design', icon: 'fa-solid fa-mobile-screen' },

    // --- State Management & APIs ---
    { name: 'RxJS', icon: 'fa-solid fa-bolt' },
    { name: 'NgRx', icon: 'fa-solid fa-database' },
    { name: 'REST APIs', icon: 'fa-solid fa-plug' },
    { name: 'Axios', icon: 'fa-solid fa-cloud-arrow-down' },

    // --- Tools & Platforms ---
    { name: 'npm', icon: 'fa-brands fa-npm' },
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'JIRA', icon: 'fa-brands fa-jira' },
    { name: 'Postman', icon: 'fa-solid fa-flask' },
    { name: 'Swagger', icon: 'fa-solid fa-scroll' },
    { name: 'Figma', icon: 'fa-brands fa-figma' },

    // --- Testing & DevOps ---
    { name: 'Jasmine / Karma', icon: 'fa-solid fa-vial' },
    { name: 'CI/CD', icon: 'fa-solid fa-rocket' },

    // --- Backend Basics ---
    { name: 'Node.js', icon: 'fa-brands fa-node-js', level: 'Intermediate' },
    {
      name: 'Express.js',
      icon: 'fa-solid fa-network-wired',
      level: 'Intermediate',
    },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', level: 'Intermediate' },
    { name: 'MySQL', icon: 'fa-solid fa-database', level: 'Intermediate' },

    // --- Methodologies ---
    { name: 'Agile / Scrum', icon: 'fa-solid fa-users-gear' },
  ];
}
