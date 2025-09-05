import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-design-lines',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './design-lines.component.html',
  styleUrl: './design-lines.component.css'
})
export class DesignLinesComponent {

}
