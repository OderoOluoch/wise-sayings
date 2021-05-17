import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0,'https://source.unsplash.com/EAvS-4KnGrk/400x250','','','', new Date(),'https://source.unsplash.com/7YVZYZeITc8/30x30','','',0,0)
  @Output() addQuote = new EventEmitter<Quote>()

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
