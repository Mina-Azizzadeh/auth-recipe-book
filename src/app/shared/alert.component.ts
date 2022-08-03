import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "message",
  styleUrls: ["alert.component.css"],
  templateUrl: "alert.component.html",
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }
}
