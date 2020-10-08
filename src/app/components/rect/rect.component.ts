import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FontService } from '../../services/font.service';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css'],
})
export class RectComponent implements OnInit {
  @ViewChild('rect', { static: true }) rect: ElementRef;
  // Input Text & Font from Form for our Logo
  @Input() text: string;
  @Input() font: string;

  public ctx: CanvasRenderingContext2D;

  constructor(private fontService: FontService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.rectCanvas();
  }

  rectCanvas() {
    // Loading Google Font
    if (this.font) {
      this.fontService.getGoogleFonts(this.font);
    }
    this.ctx = this.rect.nativeElement.getContext('2d');

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.beginPath();
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(75, 0, 200, 75);

    this.ctx.closePath();
  }
}
