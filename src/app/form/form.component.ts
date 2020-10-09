import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FontService } from '../services/font.service';
import { LogoService } from '../services/logo.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, AfterContentChecked {
  public form: FormGroup;

  /**
   * Fonts Array
   */
  public fonts = [];

  public paramId: string;

  private isCreateMode: boolean;

  constructor(
    private logoService: LogoService,
    private fontService: FontService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFonts();

    /**
     * Get Id parameter from Route
     */
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.isCreateMode = !this.paramId;

    /**
     * Form init
     */
    this.form = new FormGroup({
      id: new FormControl(''),
      logoText: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      logoFont: new FormControl('', [Validators.required]),
      logoFigure: new FormControl('circle', [Validators.required]),
    });

    if (!this.isCreateMode) {
      const editedLogo = this.logoService.getLogo(this.paramId);
      this.form.patchValue(editedLogo);
    }
  }

  ngAfterContentChecked() {
    /**
     * Loading Google Font
     */
    const font = this.form.value.logoFont;
    if (font) {
      this.fontService.getGoogleFonts(font);
    }
  }

  /**
   * Create or Update Logo
   */
  onSubmit() {
    this.fontService.getGoogleFonts(this.form.value.logoFont);
    if (this.isCreateMode) {
      this.createForm();
    } else {
      this.updateForm();
    }
    this.router.navigate(['/logo']);
  }

  createForm() {
    const newLogo = this.form.value;
    newLogo.id = uuid.v4();
    this.logoService.addLogo(newLogo);

    this.form.reset();
  }

  updateForm() {
    this.logoService.updateLogo(this.paramId, this.form.value);
  }

  /**
   * Load Static Fonts Name
   */
  getFonts() {
    return (this.fonts = this.fontService.getFonts());
  }
}
