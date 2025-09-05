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
  
  galleryImages = [
    {
      src: 'assets/Startseite/Gallery/home_gallery_1.jpg',
      altKey: 'inspiration.gallery.alt'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_2.jpg',
      altKey: 'inspiration.gallery.alt 2'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_3.jpg',
      altKey: 'inspiration.gallery.alt 3'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_4.jpg',
      altKey: 'inspiration.gallery.alt 4'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_5.jpg',
      altKey: 'inspiration.gallery.alt 5'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_6.jpg',
      altKey: 'inspiration.gallery.alt 6'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_7.jpg',
      altKey: 'inspiration.gallery.alt 7'
    },
    {
      src: 'assets/Startseite/Gallery/home_gallery_8.jpg',
      altKey: 'inspiration.gallery.alt 8'
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
    // Return 6 dashes for mobile, 3 for desktop
    if (window.innerWidth <= 480) {
      return [1, 2, 3, 4, 5, 6];
    }
    // Desktop: return 3 dashes as before
    return [1, 2, 3];
  }

  getCurrentDashIndex() {
    // For mobile: direct mapping to current slide
    if (window.innerWidth <= 480) {
      return this.currentSlide;
    }
    // Desktop: keep original behavior - map current slide to dash index (0, 1, or 2)
    if (this.currentSlide < 3) return 0;
    if (this.currentSlide < 6) return 1;
    return 2;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.galleryImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(dashIndex: number) {
    // For mobile: direct mapping
    if (window.innerWidth <= 480) {
      this.currentSlide = dashIndex;
    } else {
      // For desktop: map dash index to slide index
      if (dashIndex === 0) this.currentSlide = 0;
      else if (dashIndex === 1) this.currentSlide = 3;
      else if (dashIndex === 2) this.currentSlide = 6;
    }
  }
}
