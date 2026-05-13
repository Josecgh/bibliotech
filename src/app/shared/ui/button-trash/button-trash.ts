import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-trash',
  imports: [],
  templateUrl: './button-trash.html',
  styleUrl: './button-trash.css',
})
export class ButtonTrash {
  item = input<string>("");
  eventEmitted = output<string>();
  emitEvent(){
    this.eventEmitted.emit(this.item());
  }
}
