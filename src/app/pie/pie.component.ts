import { Component, OnInit } from '@angular/core';
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

  public isLoading: boolean = true;
  private data: any[];
  public dropdownItems: any[];
  private currentSelection: string;

  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' }
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
      if (progs && progs.length > 0) {
        this.data = progs;

        this.dropdownItems = generateDropdownItems(progs, 'id', 'title');

        let prog = progs[0];
        this.currentSelection = String(progs[0]['id']);

        this.pieChartLabels = prog.labels;
        this.pieChartData = prog.data;
      } else {
        this.isLoading = false;
      }
    },
      error => { console.error(<any> error); }
    );

  }

  private selectQuarter(id: string): any | null {
    for (let obj of this.data) {
      if (obj['id'] === +id) {
        return obj;
      }
    }
    return null;
  }

  public onSelect(value: string): void {
    console.log(`I'm in select!`);
    if (value === this.currentSelection) {
      console.log(`But I'm not doing anything :p`);
      return;
    }

    this.currentSelection = value;
    let course = this.selectQuarter(value);
    console.log(course);

    if (course !== null) {
      this.pieChartData = course['data'];
    }
  }

}
