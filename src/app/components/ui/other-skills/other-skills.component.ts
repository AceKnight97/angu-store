import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.scss'],
})
export class OtherSkillsComponent implements OnInit {
  @Input() otherSkill: any = new FormControl('');
  @Input() index: number = 0;
  @Output() onClickAddOS = new EventEmitter<any>();
  @Output() onClickRemoveOS = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  onClickAdd(): void {
    this.onClickAddOS.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveOS.emit(this.index);
  }
}
