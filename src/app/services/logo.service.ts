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
      logoText: 'Mercedes',
      logoFont: '',
      logoFigure: 'circle',
    },
    {
      id: '2',
      logoText: 'Audi',
      logoFont: '',
      logoFigure: 'rect',
    },
    {
      id: '3',
      logoText: 'BMW',
      logoFont: '',
      logoFigure: 'triangle',
    },
    {
      id: '4',
      logoText: 'Jaguar',
      logoFont: '',
      logoFigure: 'rect',
    },
    {
      id: '5',
      logoText: 'Renault',
      logoFont: '',
      logoFigure: 'circle',
    },
    {
      id: '6',
      logoText: 'Peugeout',
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
