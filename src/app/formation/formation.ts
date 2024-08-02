export class formation {
  id: number;
  title: string;
  description: string;
  icon: string;
  date: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    icon: string,
    date: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.date = date;
  }
}
