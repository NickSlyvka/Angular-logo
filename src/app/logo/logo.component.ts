import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logo } from '../models/logo.model';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  public logo: Logo;

  constructor(
    private logoService: LogoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /**
     * Get parameter Id for get Logo
     */
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getLogo(id);
    }
  }

  getLogo(id: string) {
    this.logo = this.logoService.getLogo(id);
  }
}
