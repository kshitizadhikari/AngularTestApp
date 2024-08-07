import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  // template: '<h1>NavBarrrrr</h1>',
  styleUrl: './navbar.component.css',
  // styles: ['h1{ color: red}'],
})
export class NavbarComponent {
  @Input() toNavFromApp: string = '';
}
