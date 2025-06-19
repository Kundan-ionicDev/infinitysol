import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  aboutText: string = "Welcome to the About Us page.";

  changeContent() {
    this.aboutText = "Here is the updated content after clicking the button!";
  }
}