import { Injectable } from '@angular/core';

import { Logo } from '../models/logo.model';

@Injectable({
  providedIn: 'root',
})
export class LogoService {
  /**
   * Get started fonts array
   */
  public logos: Logo[] = [
    {
      id: '1',
      logoText: 'Samsung',
      logoFont: '',
      logoFigure: 'circle',
    },
    {
      id: '2',
      logoText: 'Phillips',
      logoFont: '',
      logoFigure: 'rect',
    },
    {
      id: '3',
      logoText: 'Lg',
      logoFont: '',
      logoFigure: 'triangle',
    },
    {
      id: '4',
      logoText: 'Apple',
      logoFont: '',
      logoFigure: 'rect',
    },
    {
      id: '5',
      logoText: 'Xiaomi',
      logoFont: '',
      logoFigure: 'circle',
    },
    {
      id: '6',
      logoText: 'Oppo',
      logoFont: '',
      logoFigure: 'triangle',
    },
  ];

  constructor() {}

  getLogo(id: string) {
    return this.logos.find((c) => c.id === id);
  }

  addLogo(logo: Logo) {
    this.logos.push(logo);
  }

  updateLogo(id, form) {
    const idx = this.logos.findIndex((с) => с.id === id);
    this.logos[idx] = form;
  }

  deleteLogo(logo: Logo) {
    return (this.logos = this.logos.filter((r) => r.id !== logo.id));
  }
}
