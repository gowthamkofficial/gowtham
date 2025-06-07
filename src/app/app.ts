import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Banner } from './banner/banner';
import { Skills } from './skills/skills';
import { Roles } from './roles/roles';
import { Freelance } from './freelance/freelance';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Blogs } from './blogs/blogs';
import { Contactme } from './contactme/contactme';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Banner,
    Skills,
    Roles,
    Experience,
    Freelance,
    Projects,
    Blogs,
    Contactme,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Gowtham-Portfolio';
}
