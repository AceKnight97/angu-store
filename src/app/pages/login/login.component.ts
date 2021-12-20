import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
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
  constructor(private httpClient: HttpClient) {
    // const raw = filterMasterData1(this.masterData);
    // const temp = raw.filter((x) => x?.competence);
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log({ selectedFile: this.selectedFile });
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, 'TestImg');
    console.log({ uploadImageData });
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, 'TestImg');
    console.log({ uploadImageData });
    this.httpClient
      .post('http://localhost:8080/image/upload', uploadImageData, {
        observe: 'response',
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient
      .get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
  }

  ngOnInit(): void {}
}
