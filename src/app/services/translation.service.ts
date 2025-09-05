import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('de');
  private translationsLoaded = new BehaviorSubject<boolean>(false);
  private translations: any = {};

  translationsLoaded$ = this.translationsLoaded.asObservable();

  constructor(private http: HttpClient) {
    // Load German translations by default
    this.loadTranslations('de');
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }

  setLanguage(language: string): void {
    this.currentLanguage.next(language);
    this.loadTranslations(language);
  }


  private loadTranslations(language: string): void {
    console.log('Loading translations for language:', language);
    this.translationsLoaded.next(false);
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (translations) => {
        console.log('Translations loaded:', translations);
        console.log('Translations structure:', JSON.stringify(translations, null, 2));
        this.translations = translations;
        this.translationsLoaded.next(true);
      },
      (error) => {
        console.error('Error loading translations:', error);
        // Fallback to German if loading fails
        if (language !== 'de') {
          this.loadTranslations('de');
        }
      }
    );
  }

  translate(key: string): string {
    if (!this.translationsLoaded.value) {
      console.warn('Translations not loaded yet. Returning key:', key);
      return key;
    }

    console.log('Translating key:', key, 'Current translations:', this.translations);
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.log('Translation not found for key:', key);
        return key; // Return key if translation not found
      }
    }
    
    console.log('Translation result:', value);
    return typeof value === 'string' ? value : key;
  }

  getTranslations(): any {
    return this.translations;
  }

  isTranslationsLoaded(): boolean {
    return this.translationsLoaded.value;
  }
}
