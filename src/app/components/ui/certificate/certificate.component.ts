import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
  @Input() certi: any = new FormGroup({
    date: new FormControl(''),
    certificateName: new FormControl(''),
    organizationName: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddCerti = new EventEmitter<any>();
  @Output() onClickRemoveCerti = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddCerti.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveCerti.emit(this.index);
  }
}
