import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleMenu(event: Event): void {
    const element = (event.currentTarget as HTMLElement).parentElement;
    if (element) {
      element.classList.toggle('showMenu');
    }
  }

}
