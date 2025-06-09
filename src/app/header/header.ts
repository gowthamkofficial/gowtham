import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @ViewChild('navList') navList!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  openSidebar() {
    this.navList.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  closeSidebar() {
    this.navList.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }
}
