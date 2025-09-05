import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Make the pipe impure so it updates when translations change
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private lastValue: string = '';
  private lastKey: string = '';
  private subscription?: Subscription;

  constructor(private translationService: TranslationService) {
    // Subscribe to translation loading state
    this.subscription = this.translationService.translationsLoaded$.subscribe(() => {
      // Force pipe to re-evaluate when translations are loaded
      this.lastKey = '';
    });
  }

  transform(key: string, loadingText: string = 'Loading...'): string {
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.lastValue = this.translationService.isTranslationsLoaded() 
        ? this.translationService.translate(key)
        : loadingText;
    }
    return this.lastValue;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
