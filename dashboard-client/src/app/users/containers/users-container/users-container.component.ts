import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  tiles: Tile[];

  constructor() {
    this.tiles = [
      {cols: 3, rows: 1},
      {cols: 1, rows: 1},
      {cols: 2, rows: 1}
    ];
  }

  ngOnInit(): void {
  }

}
