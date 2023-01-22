import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';
import {months} from '../../data/months';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = "https://www.ceo-review.com/wp-content/uploads/2022/05/Software-Development.jpg";
  @Input() contentTitle: string = "Notícia";
  @Input() contentDescription: string = "";
  @Input() contentStringDate: string = "02 de Janeiro de 2023";
  private id: string | null= "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void{
    const result = dataFake.filter(article => article.id.toString() == id)[0];

    console.log(result);
    console.log(months);

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentStringDate = this.formatedDate(result.date);
    this.photoCover = result.photo;

  }

  formatedDate(date: Date): string{
    return `${date.getDate()} de ${months[date.getMonth()].name} de ${date.getFullYear()}`;
  }

}
