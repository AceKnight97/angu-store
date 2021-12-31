import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';
import masterData, {
  SkillObj,
  filterMasterData1,
} from './masterdata.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  selectedFile = new Blob();
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string | undefined;
  imageName: any;
  // masterData: string = JSON.stringify(masterData);
  masterData: SkillObj[] = masterData;
  testSelect = new FormControl();
  selectList: string[] = ['a', 'b', 'c'];

  constructor(private httpClient: HttpClient) {
    // const raw = filterMasterData1(this.masterData);
    // const temp = raw.filter((x) => x?.competence);
  }

  public onFileChanged(event: any) {}

  onUpload() {}

  getImage() {}

  ngOnInit(): void {}
}
