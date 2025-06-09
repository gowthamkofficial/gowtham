import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
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

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}
