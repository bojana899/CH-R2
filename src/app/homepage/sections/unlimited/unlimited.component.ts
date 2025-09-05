import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-unlimited',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './unlimited.component.html',
  styleUrl: './unlimited.component.css'
})
export class UnlimitedComponent {

}
