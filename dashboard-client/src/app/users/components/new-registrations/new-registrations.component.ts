import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-registrations',
  templateUrl: './new-registrations.component.html',
  styleUrls: ['./new-registrations.component.scss']
})
export class NewRegistrationsComponent implements OnInit {

  @Input() newRegistrationsCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
