export class project {
  language: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  webLink: string;

  constructor(
    language: string,
    title: string,
    description: string,
    image: string,
    githubLink: string,
    webLink: string
  ) {
    this.language = language;
    this.title = title;
    this.description = description;
    this.image = image;
    this.githubLink = githubLink;
    this.webLink = webLink;
  }
}
