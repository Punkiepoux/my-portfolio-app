export class dev {
  id: string;
  nom: string;
  prenom: string;
  photo: string;
  description: string;
  dateNaissance: Date;
  linkedIn: string;
  github: string;
  instagram: string;
  twiter: string;
  facebook: string;
  email: string;
  telephone: string;
  adresse: string;
  cv: string;

  constructor(
    id: string,
    nom: string,
    prenom: string,
    photo: string,
    description: string,
    dateNaissance: Date,
    linkedIn: string,
    github: string,
    instagram: string,
    twiter: string,
    facebook: string,
    email: string,
    telephone: string,
    adresse: string,
    cv: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.description = description;
    this.dateNaissance = dateNaissance;
    this.linkedIn = linkedIn;
    this.github = github;
    this.instagram = instagram;
    this.twiter = twiter;
    this.facebook = facebook;
    this.email = email;
    this.telephone = telephone;
    this.adresse = adresse;
    this.cv = cv;
  }
}
