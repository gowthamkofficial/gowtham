import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
})
export class Roles {
  rolesAndResponsibilities = [
    {
      role: 'Frontend Web Development',
      description:
        'Developed and maintained robust, responsive web applications ensuring performance and scalability.',
      icon: 'fa-solid fa-laptop-code',
    },
    {
      role: 'Performance Optimization',
      description:
        'Continuously improved application performance through profiling, code refactoring, and best practice implementation.',
      icon: 'fa-solid fa-gauge-high',
    },
    {
      role: 'Issue Diagnosis & Resolution',
      description:
        'Investigated, analyzed, and resolved application-related issues efficiently, minimizing downtime and enhancing user experience.',
      icon: 'fa-solid fa-bug',
    },
    {
      role: 'Comprehensive Documentation',
      description:
        'Created clear and detailed technical documentation to support maintainability and cross-team collaboration.',
      icon: 'fa-solid fa-file-lines',
    },
    {
      role: 'Stakeholder Collaboration',
      description:
        'Worked closely with product managers, UI/UX designers, and QA teams to translate requirements into functional features.',
      icon: 'fa-solid fa-users-gear',
    },
    {
      role: 'API Integration',
      description:
        'Integrated third-party services and APIs into applications to enhance features and improve functionality.',
      icon: 'fa-solid fa-plug',
    },
    {
      role: 'Testing & Quality Assurance',
      description:
        'Conducted thorough user acceptance testing (UAT) and functional testing to ensure reliability before deployment.',
      icon: 'fa-solid fa-vial',
    },
    {
      role: 'Version Control Management',
      description:
        'Utilized Git and other version control systems to manage source code history, branches, and collaborative development.',
      icon: 'fa-brands fa-git-alt',
    },
    {
      role: 'Bug & Task Tracking',
      description:
        'Managed and tracked issues using tools like Jira or Trello to ensure timely resolution and progress visibility.',
      icon: 'fa-solid fa-list-check',
    },
    {
      role: 'Agile Development',
      description:
        'Participated in Agile/Scrum workflows, contributing to sprints, stand-ups, and continuous delivery cycles.',
      icon: 'fa-solid fa-people-arrows',
    },
    {
      role: 'App Publishing & Maintenance',
      description:
        'Successfully published and maintained applications on Google Play and Apple App Store, including handling updates and user feedback.',
      icon: 'fa-brands fa-google-play',
    },
  ];
}
