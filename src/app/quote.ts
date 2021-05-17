export class Quote {
  showDescription: boolean;
  upVote:number;
  downVote:number;
  constructor(
    public id: number,
    public mainImageUrl:string,
    public category:string,
    public title:string,
    public description:string,
    public postDate:Date,
    public authorImageUrl:string,
    public authorName:string,
    public quoteSubmitedBy:string,
  ) {
    this.showDescription = false;
    this.upVote = 0;
    this.downVote=0;
  }
}
