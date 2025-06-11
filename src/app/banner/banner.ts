import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {
downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'GowthamK-Resume-Angular.pdf';
  link.click();
}
}
