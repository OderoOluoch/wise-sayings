export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date
  ) {
    this.showDescription = false;
  }
}


// mainImageUrl:string;
//     category:string;
//     title:string;
//     description:string;
//     postDate:string;
//     authorImageUrl:string;
//     authorName:string;