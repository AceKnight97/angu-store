import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  angForm;
  selectedFile: File | undefined;
    constructor(private httpClient: HttpClient,private fb: FormBuilder ) {
      this.angForm = this.fb.group({
        selectedFile:undefined
      });
    }
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string | undefined;
    imageName: any;
    //Gets called when the user selects an image
    //Gets called when the user clicks on submit to upload the image
public onFileChanged(event: any) {
  //Select File
  this.selectedFile = event.target.files[0];
  console.log({selectedFile: this.selectedFile})
}
    onUpload() {
      console.log({a: this.angForm.value});
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      // const uploadImageData = new FormData();
      // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile?.name||undefined);
      // //Make a call to the Spring Boot Application to save the image
      // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      //   .subscribe((response) => {
      //     if (response.status === 200) {
      //       this.message = 'Image uploaded successfully';
      //     } else {
      //       this.message = 'Image not uploaded successfully';
      //     }
      //   }
      //   );
    }
      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
    }

  ngOnInit(): void {}
}
