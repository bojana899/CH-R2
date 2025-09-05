import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-wheels-unlimited-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './wheels-unlimited-section.component.html',
  styleUrl: './wheels-unlimited-section.component.css'
})
export class WheelsUnlimitedSectionComponent {
  configureUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
  
  constructor() {
    // Set URL based on current language
    const currentLang = localStorage.getItem('language') || 'en';
    if (currentLang === 'de') {
      this.configureUrl = 'https://store.kwautomotive.de/de/bbs/shop';
    } else {
      this.configureUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
    }
  }

  scrollToCompare() {
    const compareSection = document.getElementById('go-unlimited-section');
    if (compareSection) {
      compareSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
