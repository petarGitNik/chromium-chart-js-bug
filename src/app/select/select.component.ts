import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  @Input() items: any[];
  @Output() select: EventEmitter<string>;

  constructor() {
    this.select = new EventEmitter();
  }

  ngOnInit() {
    console.log(`Initializing <app-select>`);
  }

  onClick(value: string): void {
    console.log(`I'm emitting ${value}`);
    this.select.emit(value);
  }

}
