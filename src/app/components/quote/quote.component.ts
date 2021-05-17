import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Motivational',
      'The Path to freedom',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      2,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Educational',
      'Open your mind',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      3,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Attitude',
      'It is all within',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      4,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Friendship',
      'Hold my Hand',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      5,
      'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      'Happiness',
      'Let me feel',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      6,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Inspirational',
      'It will manifest',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      7,
      'https://source.unsplash.com/EAvS-4KnGrk/400x250',
      'Leadership',
      'Personal Growth',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    ),
    new Quote(
      8,
      'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      'Love',
      'Adam and Eve',
      'The one who makes this work, makes this work terribley',
      new Date(2020, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Elon Musk',
      'Odero Oluoch',
      0,
      0,
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].title}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
