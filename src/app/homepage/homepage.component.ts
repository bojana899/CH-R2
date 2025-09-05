import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './sections/hero-carousel/hero-carousel.component';
import { WheelUnlimitedComponent } from './sections/wheel-unlimited/wheel-unlimited.component';
import { DesignLinesComponent } from './sections/design-lines/design-lines.component';
import { UnlimitedComponent } from './sections/unlimited/unlimited.component';
import { InspirationComponent } from './sections/inspiration/inspiration.component';
import { WheelsSectionComponent } from './sections/wheels-section/wheels-section.component';
import { ActionsComponent } from './sections/actions/actions.component';
import { FooterComponent } from '../footer/footer.component';
import { SupportContactComponent } from './sections/support-contact/support-contact.component';
import { WheelsUnlimitedSectionComponent } from './sections/wheels-unlimited-section/wheels-unlimited-section.component';
import { GoUnlimitedComponent } from './sections/go-unlimited/go-unlimited.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeroCarouselComponent, GoUnlimitedComponent,WheelUnlimitedComponent,WheelsUnlimitedSectionComponent, DesignLinesComponent, UnlimitedComponent, InspirationComponent, WheelsSectionComponent, ActionsComponent, SupportContactComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  // Homepage component is now clean and focused on layout
  // All carousel logic has been moved to HeroCarouselComponent
  // Wheel unlimited section added as separate component
  // Footer component added
}