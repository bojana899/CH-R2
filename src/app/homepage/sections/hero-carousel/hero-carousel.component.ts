import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.css'
})
export class HeroCarouselComponent implements AfterViewInit {
  @ViewChildren('videoRef') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;
  
  carouselItems = [
    { 
      type: 'video', 
      src: 'https://cdn.bbs.com/101/assets/images/videos/BBS_CHRIIU_1920x1023.mp4',
      mobileSrc: 'https://cdn.bbs.com/101/assets/images/videos/BBS_Mobil_390x788.mp4',
      titleKey: 'heroCarousel.slides.chrII.title',
      buttonTextKey: 'heroCarousel.slides.chrII.buttonText',
      buttonLink: 'https://www.bbs.com/en/product-details/CH-R-II'
    },
    { 
      type: 'image', 
      src: 'assets/Startseite/aktion.jpg',
      titleKey: 'heroCarousel.slides.action.title',
      buttonTextKey: 'heroCarousel.slides.action.buttonText',
      buttonLink: 'https://store.kwautomotive.de/de/shop'
    },
    { 
      type: 'image', 
      src: 'assets/Startseite/designlinien.jpg',
      titleKey: 'heroCarousel.slides.design.title',
      buttonTextKey: 'heroCarousel.slides.design.buttonText',
      buttonLink: 'https://www.bbs.com/de/galerie'
    }
  ];

  activeIndex = 0;
  public videoPlaying = false;
  private userInteracted = false;

  ngAfterViewInit() {
    this.enableAutoplayOnUserInteraction();
    // Start with the first slide
    setTimeout(() => {
      this.playActiveVideo();
    }, 100);
  }

  next() {
    this.changeSlide((this.activeIndex + 1) % this.carouselItems.length);
  }

  prev() {
    this.changeSlide((this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length);
  }

  changeSlide(index: number) {
    this.pauseAllVideos();
    this.activeIndex = index;

    // Allow Angular to update DOM before trying to play the video
    setTimeout(() => {
      this.playActiveVideo();
    });
  }

  pauseAllVideos() {
    this.videoRefs?.forEach(videoEl => {
      const video = videoEl.nativeElement;
      if (!video.paused) {
        video.pause();
      }
    });
  }

  playActiveVideo() {
    const activeItem = this.carouselItems[this.activeIndex];
    if (activeItem.type === 'video') {
      const activeVideo = this.videoRefs?.toArray()[this.activeIndex]?.nativeElement;
      if (activeVideo) {
        activeVideo.play().then(() => {
          this.videoPlaying = true;
        }).catch(err => {
          // Autoplay failed, but that's expected without user interaction
        });
      }
    }
  }

  getVideoSource(item: any): string {
    if (item.type === 'video') {
      // Check if it's mobile screen size
      const isMobile = window.innerWidth <= 768;
      return isMobile && item.mobileSrc ? item.mobileSrc : item.src;
    }
    return item.src;
  }

  enableAutoplayOnUserInteraction() {
    // Listen for any user interaction to enable autoplay
    const enableAutoplay = () => {
      if (!this.userInteracted) {
        this.userInteracted = true;
        this.playActiveVideo();
      }
    };

    // Listen for various user interactions
    document.addEventListener('click', enableAutoplay, { once: true });
    document.addEventListener('touchstart', enableAutoplay, { once: true });
    document.addEventListener('keydown', enableAutoplay, { once: true });
    document.addEventListener('scroll', enableAutoplay, { once: true });
  }
}
