import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions: { [key: string]: Subscription } = {};
  currentLanguage: string = 'DE';
  showLanguageDropdown: boolean = false;
  showMobileMenu: boolean = false;
  showSearch: boolean = false;
  cartItemCount: number = 0;
  dropdownPosition: { top: string; left?: string; right?: string } = { top: '0px', left: '0px' };

  constructor(
    private elementRef: ElementRef,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    // Subscribe to language changes
    this.subscriptions['language'] = this.translationService.getCurrentLanguage().subscribe(language => {
      this.currentLanguage = language.toUpperCase();
    });

    // Subscribe to translations loading state
    this.subscriptions['translations'] = this.translationService.translationsLoaded$.subscribe(loaded => {
      if (!loaded) {
        console.log('Waiting for translations to load...');
      }
    });
  }

  ngOnDestroy(): void {
    // Cleanup all subscriptions
    Object.values(this.subscriptions).forEach(sub => sub.unsubscribe());
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const languageSelector = this.elementRef.nativeElement.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (!languageSelector?.contains(event.target as Node) && 
        !languageDropdown?.contains(event.target as Node)) {
      this.showLanguageDropdown = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.showLanguageDropdown) {
      this.calculateDropdownPosition();
    }
  }

  toggleLanguageDropdown(event: Event): void {
    event.stopPropagation();
    this.showLanguageDropdown = !this.showLanguageDropdown;
    
    if (this.showLanguageDropdown) {
      this.calculateDropdownPosition();
    }
  }

  private calculateDropdownPosition(): void {
    const languageSelector = this.elementRef.nativeElement.querySelector('.language-selector');
    if (languageSelector) {
      const rect = languageSelector.getBoundingClientRect();
      
      // Center the dropdown under the language selector
      const dropdownWidth = 80; // min-w-[80px] from CSS
      const selectorCenter = rect.left + (rect.width / 2);
      const dropdownLeft = selectorCenter - (dropdownWidth / 2);
      
      // Ensure dropdown doesn't go off screen
      const finalLeft = Math.max(10, Math.min(dropdownLeft, window.innerWidth - dropdownWidth - 10));
      
      this.dropdownPosition = {
        top: `${rect.bottom}px`,
        left: `${finalLeft}px`,
        right: 'auto'
      };
    }
  }

  selectLanguage(language: string, event: Event): void {
    event.stopPropagation();
    this.currentLanguage = language;
    this.showLanguageDropdown = false;
    
    // Update translation service
    const languageCode = language === 'DE' ? 'de' : 'en';
    this.translationService.setLanguage(languageCode);
  }

  toggleMobileMenu(event: Event): void {
    event.stopPropagation();
    this.showMobileMenu = !this.showMobileMenu;
    // Close language dropdown when opening mobile menu
    if (this.showMobileMenu) {
      this.showLanguageDropdown = false;
    }
  }

  getFlagPath(language: string): string {
    return `assets/flags/${language.toLowerCase()}.svg`;
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      this.showMobileMenu = false;
      this.showLanguageDropdown = false;
    }
  }

  selectVehicle(): void {
    // Implement vehicle selection logic
    console.log('Vehicle selection clicked');
  }

  goToAccount(): void {
    // Implement account navigation logic
    console.log('Account clicked');
  }

  goToCart(): void {
    // Implement cart navigation logic
    console.log('Cart clicked');
  }
}
