import { Component, OnInit } from '@angular/core';
import { Participants } from '../domain/participants';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
participants:  Participants[];
  constructor() { }

  ngOnInit() {
    this.participants = [
    {'numero': 'P100', 'nom': 'Sami', 'age': 25},
    {'numero': 'P200', 'nom': 'Mahmoud', 'age': 25},
    {'numero': 'P300', 'nom': 'Ghada', 'age': 25},
    {'numero': 'P300', 'nom': 'Marwene', 'age': 25},
    {'numero': 'P400', 'nom': 'Sami', 'age': 25}];
  }

}
