import { Component, OnInit } from '@angular/core';
import { Participants } from '../domain/participants';
import { ParticipantsService } from '../SERVICES/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
participants:  Participants[];
  constructor(private _service: ParticipantsService) { }

  ngOnInit() {
    this.participants = this._service.getAll() ;
  }

}
