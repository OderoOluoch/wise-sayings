export class Quote {
  showDescription: boolean;
  
  constructor(
    public id: number,
    public mainImageUrl:string,
    public category:string,
    public title:string,
    public postDate:Date,
    public authorImageUrl:string,
    public authorName:string,
    public quoteSubmitedBy:string,
    public description:string,
    public upVote:number,
    public downVote:number,
  ) {
    this.showDescription = false;
    // this.upVote = 0;
    // this.downVote=0;
  }
}
