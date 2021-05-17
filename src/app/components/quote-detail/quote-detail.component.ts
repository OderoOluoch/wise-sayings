import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  liked:boolean = true;
 
  toggleUpVote() {
    if(this.liked){
      this.quote.upVote++
      this.liked= false;
    }else{
      this.quote.upVote --;
      this.liked=true;
    }
  }
  unliked:boolean = true;
  toggleDownVote() {
    if(this.unliked){
      this.quote.downVote++;
      this.unliked= false;
    }else{
      this.quote.downVote --;
      this.unliked=true;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
