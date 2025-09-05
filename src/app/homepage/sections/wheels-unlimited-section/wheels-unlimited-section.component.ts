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
  
}
