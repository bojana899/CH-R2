import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-inspiration',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.css'
})
export class InspirationComponent {
  currentSlide = 0;
  
  heroImage = {
    src: 'assets/BBS CH-R II Export/BBS_BMW_M3_CSL_G80_001.jpg',
    altKey: 'inspiration.hero.alt'
  };
  
  galleryImages = [
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_1.jpg',
      altKey: 'inspiration.gallery.alt'
    },
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_2.jpg',
      altKey: 'inspiration.gallery.alt 2'
    },
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_3.jpg',
      altKey: 'inspiration.gallery.alt 3'
    },
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_4.jpg',
      altKey: 'inspiration.gallery.alt 4'
    },
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_5.jpg',
      altKey: 'inspiration.gallery.alt 5'
    },
    {
      src: 'assets/BBS CH-R II Export/ch-r-2-gallery_6.jpg',
      altKey: 'inspiration.gallery.alt 6'
    }
  ];

  getVisibleImages() {
    const visibleImages = [];
    // Always show 4 images on desktop, 1 on mobile
    const isMobile = window.innerWidth <= 480;
    const imageCount = isMobile ? 1 : 4;
    
    for (let i = 0; i < imageCount; i++) {
      const index = (this.currentSlide + i) % this.galleryImages.length;
      visibleImages.push(this.galleryImages[index]);
    }
    return visibleImages;
  }

  getDesktopImages() {
    const visibleImages = [];
    // Always show 4 images for desktop
    for (let i = 0; i < 4; i++) {
      const index = (this.currentSlide + i) % this.galleryImages.length;
      visibleImages.push(this.galleryImages[index]);
    }
    return visibleImages;
  }

  getMobileImages() {
    const visibleImages = [];
    // Always show 1 image for mobile
    visibleImages.push(this.galleryImages[this.currentSlide]);
    return visibleImages;
  }

  getNavigationDashes() {
    // Return 3 dashes for all screen sizes
    return [1, 2, 3];
  }

  getCurrentDashIndex() {
    // Map current slide to dash index (0-2 for 3 dashes)
    return this.currentSlide % 3;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.galleryImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(dashIndex: number) {
    // Map dash index to slide index
    this.currentSlide = dashIndex;
  }
}
