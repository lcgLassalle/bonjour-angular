export class Collegue {
  matricule:string;
  nom:string;
  prenoms:string;
  email:string;
  dateNaissance:Date;
  photoUrl:string;

  constructor(matricule:string, nom:string, prenom:string, email:string, dateNaissance:Date, photoUrl:string){
    this.matricule=matricule;
    this.nom=nom;
    this.prenoms=prenom;
    this.email=email;
    this.dateNaissance=dateNaissance;
    this.photoUrl=photoUrl;

  }
}
