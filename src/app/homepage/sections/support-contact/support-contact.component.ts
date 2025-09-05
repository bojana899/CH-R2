import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-support-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './support-contact.component.html',
  styleUrl: './support-contact.component.css'
})
export class SupportContactComponent {

}
