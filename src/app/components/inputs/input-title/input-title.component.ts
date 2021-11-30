import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-title',
  templateUrl: './input-title.component.html',
  styleUrls: ['./input-title.component.scss'],
})
export class InputTitleComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
