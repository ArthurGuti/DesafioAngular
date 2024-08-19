import { Component, EventEmitter, Input, Output } from '@angular/core';
type BtnVariant = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})

export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() load: boolean = false;
  @Input() variant: BtnVariant = "primary"

  submit() {
    this.onSubmit.emit();
  }
}
