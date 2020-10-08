import { Injectable } from '@angular/core';
import * as WebFont from 'webfontloader';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  /**
   * Start Font Array
   */
  public fonts: string[] = [];

  /**
   * Array of Cached Fonts
   */
  private loadedFonts: string[] = [];

  constructor() {}

  /**
   * Get start fonts array
   */
  getFonts() {
    return (this.fonts = [
      'Sansita Swashed',
      'Anton',
      'Josefin Sans',
      'Verdana',
      'Roboto',
      'Peddana',
      'Lato',
      'Montserrat',
      'Roboto Mono',
      'Roboto Condensed',
      'Raleway',
      'Poppins',
    ]);
  }

  /**
   * Get google font
   * @param font - static font name
   */
  getGoogleFonts(font) {
    /**
     * Cache Fonts
     */
    if (this.loadedFonts.indexOf(font) > -1) {
      return;
    }

    this.loadedFonts.push(font);

    /**
     * Load Fonts
     */
    WebFont.load({
      google: {
        families: [`${font}`],
      },
    });
  }
}
