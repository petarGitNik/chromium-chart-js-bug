import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() items: any[];
  @Output() select: EventEmitter<string>;

  constructor() {
    this.select = new EventEmitter();
  }

  onSelect(value: string): void {
    this.select.emit(value);
  }

}
