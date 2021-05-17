import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})

// public id: number,
// public mainImageUrl:string,
// public category:string,
// public title:string,
// public postDate:Date,
// public authorImageUrl:string,
// public authorName:string,
// public quoteSubmitedBy:string,
// public description:string,
// public upVote:number,
// public downVote:number,



export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'https://source.unsplash.com/odxB5oIG_iA/400x250',
      'Motivational',
      'Winter is Coming',
      new Date(2021, 3, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Tyrion Lannister',
      'Sandra Karimi',
      'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you',
      979,
      134,
    ),
    new Quote(
      2,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Educational',
      'Things fall Apart',
      new Date(2020, 8, 10),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Chinua Achebe',
      'Nyaboke Nyadondi',
      'A man who calls his kinsmen to a feast does not do so to save them from starving. They all have food in their own homes. When we gather together in the moonlit village ground it is not because of the moon. Every man can see it in his own compound. We come together because it is good for kinsmen to do so.',
      253,
      56,
    ),
    new Quote(
      3,
      'https://source.unsplash.com/odxB5oIG_iA/400x250',
      'Attitude',
      'A promised Land',
      new Date(2021, 1, 11),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Barrack Obama',
      'Evance Gichuru.',
      'I experienced failure and learned to buck up so I could rally those who’d put their trust in me. I suffered rejections and insults often enough to stop fearing them. In other words, I grew up—and got my sense of humor back',
      56,
      7,
    ),
    new Quote(
      4,
      'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      'Friendship',
      'The Oath Breaker',
      new Date(2020, 6, 20),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Tyrion Lannister',
      'Odero Oluoch',
      'A wise man once said the true history of the world is the history of great conversations in elegant rooms',
      803,
      3,
    ),
    new Quote(
      5,
      'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      'Happiness',
      'How I met your mother',
      new Date(2021, 4, 5),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Ted Mosby',
      'Nashipai Naiserian',
      'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride',
      79,
      158,
    ),
    new Quote(
      6,
      'https://source.unsplash.com/cGwfkwHmt98/400x250',
      'Inspirational',
      'Gates foundation',
      new Date(2020, 11, 11),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Bill Gates',
      'Esther Ameshi',
      'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
      234,
      9,
    ),
    new Quote(
      7,
      'https://source.unsplash.com/EAvS-4KnGrk/400x250',
      'Leadership',
      'Just start',
      new Date(2020, 8, 21),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Isaac Newton',
      'Odero Oluoch',
      'The seed of a tree has the nature of a branch or twig or bud. It is a part of the tree, but if separated and set in the earth to be better nourished, the embryo or young tree contained in it takes root and grows into a new tree.',
      456,
      61,
    ),
    new Quote(
      8,
      'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      'Humanity',
      'The fight never ends',
      new Date(2020, 10, 14),
      'https://source.unsplash.com/7YVZYZeITc8/30x30',
      'Wangari Maathai',
      'Damaris Akinyi',
      'Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect',
      348,
      19,
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
