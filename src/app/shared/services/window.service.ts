import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private windowRef: Window | null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Initialize windowRef only in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef = window;
    } else {
      this.windowRef = null;
    }
  }

  get nativeWindow(): Window | null {
    return this.windowRef;
  }

  // Method to set the location.href
  public navigateTo(url: string): void {
    if (this.windowRef) {
      this.windowRef.location.href = url;
    }
  }


  public addResizeListener(listener: EventListener): void {
    if (this.windowRef) {
      this.windowRef.addEventListener('resize', listener);
    }
  }

  public removeResizeListener(listener: EventListener): void {
    if (this.windowRef) {
      this.windowRef.removeEventListener('resize', listener);
    }
  }

}
