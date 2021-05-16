import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2020,3,14)),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,3,14)),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,3,14)),
    new Quote(5,'Solve math homework','Damn Math',new Date(2020,3,14)),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2020,3,14)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
