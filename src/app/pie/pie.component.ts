import { Component, OnInit } from '@angular/core';

import 'chart.piecelabel.js';

import { PieService } from './pie.service';


export function generateDropdownItems(data: any[], value: string, label: string): any[] {
  let items = [];
  for (let d of data) {
    items.push(
      {
        value: d[value],
        label: d[label]
      }
    );
  }
  return items;
}


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  private data: any[];
  public dropdownItems: any[];
  private currentSelection: string;

  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    pieceLabel: {
      render: 'percentage',
      fontColor: 'black',
      fontStyle: 'bold',
      precision: 0
    }
  };

  public pieChartColors: Array<any> = [
    {
      backgroundColor: [
        'blue',
        'red'
      ]
    },
  ];

  constructor(private service: PieService) { }

  ngOnInit() {

    this.service.getProgress().subscribe(progs => {
      this.data = progs;

      this.dropdownItems = generateDropdownItems(progs, 'id', 'title');

      let prog = progs[0];
      this.currentSelection = String(progs[0]['id']);

      // Assign copy of labels from theo original data to the plot
      this.pieChartLabels = [...prog.labels];
      this.pieChartData = prog.data;
    },
      error => { console.error(<any> error); }
    );

  }

  /*
   * Select data from this.data using an option from the dropdown menu.
   */
  private selectQuarter(id: string): any | null {
    for (let obj of this.data) {
      if (obj['id'] === +id) {
        return obj;
      }
    }
    return null;
  }

  /*
   * When option in the dropdown menu is selected, change plot's data and label.
   */
  public onSelect(value: string): void {
    if (value === this.currentSelection) {
      return;
    }

    this.currentSelection = value;
    let quarter = this.selectQuarter(value);
    console.log(quarter);

    if (quarter !== null) {
      this.pieChartData = quarter['data'];

      this.pieChartLabels.length = 0;
      this.pieChartLabels.push(...quarter['labels']);
    }
  }

}
