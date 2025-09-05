import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-go-unlimited',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './go-unlimited.component.html',
  styleUrl: './go-unlimited.component.css'
})
export class GoUnlimitedComponent {
  // URLs for buttons
  buyNowUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
  configureUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
  
  constructor() {
    // Set URLs based on current language
    const currentLang = localStorage.getItem('language') || 'en';
    if (currentLang === 'de') {
      this.buyNowUrl = 'https://store.kwautomotive.de/de/bbs/shop';
      this.configureUrl = 'https://store.kwautomotive.de/de/bbs/shop';
    } else {
      this.buyNowUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
      this.configureUrl = 'https://store.kwautomotive.de/de-en/bbs/shop';
    }
  }
  
  // Toggle states for expandable sections
  dimensionsExpanded = true;  // Start expanded to match the image
  fitExpanded = false;        // Start collapsed
  styleExpanded = false;      // Start collapsed

  // Selected wheel states
  selectedStandardWheel = 0;
  selectedUnlimitedWheel = 0;

  // Standard wheel image
  standardWheelImage = {
    src: 'assets/BBS CH-R II Export/Wheel Selector/Standard_Satin_Black.png',
    altKey: 'goUnlimited.standard.image.alt'
  };

  // Unlimited wheel image
  unlimitedWheelImage = {
    src: 'assets/BBS CH-R II Export/Wheel Selector/Standard_Satin_Bronze.png',
    altKey: 'goUnlimited.unlimited.image.alt'
  };

  // Wheel selector options
  wheelSelectors = [
    { src: 'assets/BBS CH-R II Export/Wheel Selector/CH-0.png', colorSrc: 'assets/BBS CH-R II Export/Wheel Selector/CH-0_color.png', name: 'CH-0' },
    { src: 'assets/BBS CH-R II Export/Wheel Selector/CH-1.png', colorSrc: 'assets/BBS CH-R II Export/Wheel Selector/CH-1_color.png', name: 'CH-1' },
    { src: 'assets/BBS CH-R II Export/Wheel Selector/CH-2.png', colorSrc: 'assets/BBS CH-R II Export/Wheel Selector/CH-2_color.png', name: 'CH-2' },
    { src: 'assets/BBS CH-R II Export/Wheel Selector/CH-3.png', colorSrc: 'assets/BBS CH-R II Export/Wheel Selector/CH-3_color.png', name: 'CH-3' },
    { src: 'assets/BBS CH-R II Export/Wheel Selector/CH-4.png', colorSrc: 'assets/BBS CH-R II Export/Wheel Selector/CH-4_color.png', name: 'CH-4' }
  ];

  // Fit section images
  fitStandardImage = {
    src: 'assets/BBS CH-R II Export/lockreis_1.png',
    altKey: 'goUnlimited.fit.standard.alt'
  };

  fitUnlimitedImage = {
    src: 'assets/BBS CH-R II Export/lochkreis_unlimited.png',
    altKey: 'goUnlimited.fit.unlimited.alt'
  };

  // Style section images
  styleStandardImage = {
    src: 'assets/BBS CH-R II Export/farbpalette_1.png',
    altKey: 'goUnlimited.style.standard.alt'
  };

  styleUnlimitedImage = {
    src: 'assets/BBS CH-R II Export/farbpalette_unlimited.png',
    altKey: 'goUnlimited.style.unlimited.alt'
  };

  // Toggle methods
  toggleDimensions() {
    this.dimensionsExpanded = !this.dimensionsExpanded;
  }

  toggleFit() {
    this.fitExpanded = !this.fitExpanded;
  }

  toggleStyle() {
    this.styleExpanded = !this.styleExpanded;
  }

  // Wheel selection methods
  selectStandardWheel(index: number) {
    this.selectedStandardWheel = index;
    this.standardWheelImage.src = this.wheelSelectors[index].src;
  }

  selectUnlimitedWheel(index: number) {
    this.selectedUnlimitedWheel = index;
    this.unlimitedWheelImage.src = this.wheelSelectors[index].src;
  }

  // Color swatches for Standard
  standardColors = [
    '#666666', // Dark grey
    '#2B2B30', // Black
    '#CD7F32'  // Bronze
  ];

  // Color swatches for Unlimited
  unlimitedColors = [
    '#FF0000', // Red
    '#FF8C00', // Orange
    '#FF69B4', // Pink
    '#FFD700', // Gold
    '#2B2B30', // Black
    '#FFFFFF', // White
    '#CCCCCC'  // Light grey
  ];

  // Standard dimensions
  standardDimensions = [
    '45 Base wheels',
    '3 Concavities',
    '3 diameters',
    '5 wheel widths',
    'from 15,5 kg'
  ];

  // Unlimited dimensions
  unlimitedDimensions = [
    '63 Base wheels',
    '3 concavities',
    '3 diameters',
    '7 wheel widths',
    'from 15,2 kg'
  ];

  // Standard fit details
  standardFit = [
    '10 combinations',
    '5-hole bolt pattern - fixed',
    '2 rim offsets - fixed',
    'Aluminum centering rings'
  ];

  // Unlimited fit details
  unlimitedFit = [
    '120 combinations',
    '12 adjustable bolt patterns',
    '10 adjustable rim offsets',
    'Composite centering rings'
  ];

  // Standard style details
  standardStyle = [
    '3 versions',
    'Permanently defined',
    '3 wheel colors',
    'Center caps - pre-defined',
    'Rim protectors - pre-defined',
    'Wheel bolts - pre-defined',
    'Valve caps - pre-defined'
  ];

  // Unlimited style details
  unlimitedStyle = [
    '345,600 versions',
    'Freely configurable',
    '80 wheel colors',
    '24 center caps',
    '6 rim protectors',
    '5 wheel bolt versions',
    '8 valve caps'
  ];
}
