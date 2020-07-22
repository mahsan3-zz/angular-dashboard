import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-average-session',
  templateUrl: './average-session.component.html',
  styleUrls: ['./average-session.component.scss']
})
export class AverageSessionComponent implements OnInit {
  @Input() averageSessions: string;

  constructor() { }

  ngOnInit(): void {}

}
