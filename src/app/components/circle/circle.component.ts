import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FontService } from 'src/app/services/font.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent implements OnInit, OnChanges {
  @ViewChild('circle', { static: true }) circle: ElementRef;
  // Input Text & Font from Form for our Logo
  @Input() text: string;
  @Input() font: string;

  public ctx: CanvasRenderingContext2D;
  constructor(private fontService: FontService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.circleCanvas();
  }

  circleCanvas() {
    // Loading Google Font
    if (this.font) {
      this.fontService.getGoogleFonts(this.font);
    }
    this.ctx = this.circle.nativeElement.getContext('2d');

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.beginPath();
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(150, 100, 50, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.closePath();
  }
}
