import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { months } from 'src/app/data/months';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = dataFake;
  constructor() { }

  ngOnInit(): void {
    this.list = dataFake.map((x) => {
      x.formattedDate = `${x.date.getDate()} de ${months[x.date.getMonth()].name} de ${x.date.getFullYear()}`;
      return x;
    })
    console.log(`Datafake`);
    console.log(dataFake);
  }

}
