import { Collegue } from "../models/Collegue"
export class CollegueMock {
  col: Collegue = new Collegue("001","Mystère", "Martin","martinmystere@investigator.com",new Date(1991, 2, 21), './mystere.png');
}
