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
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css'],
})
export class TriangleComponent implements OnInit, OnChanges {
  @ViewChild('triangle', { static: true }) triangle: ElementRef;
  // Input Text & Font from Form for our Logo
  @Input() text: string;
  @Input() font: string;

  public ctx: CanvasRenderingContext2D;

  constructor(private fontService: FontService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.triangleCanvas();
  }

  triangleCanvas() {
    // Loading Google Font
    if (this.font) {
      this.fontService.getGoogleFonts(this.font);
    }

    this.ctx = this.triangle.nativeElement.getContext('2d');

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.fillStyle = 'tan';
    this.ctx.moveTo(150, 0);
    this.ctx.lineTo(75, 100);
    this.ctx.lineTo(250, 100);
    this.ctx.closePath();
    this.ctx.fill();
  }
}
