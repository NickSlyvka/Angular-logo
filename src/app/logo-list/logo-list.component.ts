import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from '../models/logo.model';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-logo-list',
  templateUrl: './logo-list.component.html',
  styleUrls: ['./logo-list.component.css'],
})
export class LogoListComponent implements OnInit {
  title = 'logosTest';

  /**
   * Logos Array
   */
  public logos: Logo[];

  constructor(private logoService: LogoService, private router: Router) {}

  ngOnInit() {
    this.logos = this.logoService.logos;
  }

  onDelete(logo: Logo) {
    this.logos = this.logoService.deleteLogo(logo);
  }

  /**
   *Navigate to Logo Details
   * @param id
   */
  onClick(id) {
    this.router.navigateByUrl(`/logo/${id}`);
  }
}
