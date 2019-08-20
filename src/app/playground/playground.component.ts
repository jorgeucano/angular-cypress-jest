import {Component, Input, OnInit} from '@angular/core';
import {iTitle} from '../interfaces/title';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  @Input() title: iTitle = {
    text: 'Hello Twitch!',
    class: 'violet'
  };

  constructor() { }

  ngOnInit() {
  }

}
