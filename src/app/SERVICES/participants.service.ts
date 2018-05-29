import { Injectable } from '@angular/core';
import { Participants } from '../domain/participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getAll() : Participants[]
  { return  [
  {'numero': 'P100', 'nom': 'Sami', 'age': 25},
  {'numero': 'P200', 'nom': 'Mahmoud', 'age': 25},
  {'numero': 'P300', 'nom': 'Ghada', 'age': 25},
  {'numero': 'P300', 'nom': 'Marwene', 'age': 25},
  {'numero': 'P400', 'nom': 'Sami', 'age': 25}];


  }
}
