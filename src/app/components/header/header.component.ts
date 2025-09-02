import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 menuOpen = false;

  // Clases dinámicas de Tailwind para el menú
 get menuClasses(): string {
  return this.menuOpen
    ? 'flex flex-col absolute top-16 left-0 w-full bg-black md:static md:flex-row md:w-auto transition-all duration-300'
    : 'hidden flex-col md:flex md:flex-row md:static md:w-auto';
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
