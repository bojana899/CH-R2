import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-wheel-unlimited',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './wheel-unlimited.component.html',
  styleUrl: './wheel-unlimited.component.css'
})
export class WheelUnlimitedComponent {}
