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
  @Input() parentDisabled: boolean = false;
  isDisabled: boolean = true;
  constructor() {}
  ngOnChanges(): void {
    this.getFirstStatus(this.otherSkill.value);
  }
  getFirstStatus(values: string) {
    this.isDisabled = values === '' || this.parentDisabled;
  }
  ngOnInit(): void {
    this.otherSkill.valueChanges.subscribe((values: any) => {
      this.getFirstStatus(values);
    });
  }
  onClickAdd(): void {
    this.onClickAddOS.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveOS.emit(this.index);
  }
}
