import { Injectable } from '@angular/core';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG, httpOptions } from 'src/app/services/config';

@Injectable({
  providedIn: 'root',
})
export class CreateCVService {
  constructor(private http: HttpClient) {}

  loadCVs(email: string): Observable<any> {
    // console.log({ email });
    return this.http.get(`${CONFIG.HOST}/digitalcv/email/${email}`);
  }
  deteleCV(id: number, email: string): Observable<any> {
    return this.http.put(
      `${CONFIG.HOST}/digitalcv/deletecv/${id}`,
      { email },
      httpOptions()
    );
  }
  getUserInfo(): Observable<any> {
    return this.http.get(`${CONFIG.HOST}/api/loggedInUser`);
  }

  public exportPDF(): void {
    let DATA = document.getElementById('htmlData');

    // html2canvas(DATA).then((canvas) => {
    //   // let fileWidth = DATA.clientWidth;
    //   // let fileHeight = DATA.clientHeight; // (canvas.height * fileWidth) / canvas.width;
    //   let fileWidth = 416;
    //   let fileHeight = (canvas.height * fileWidth) / canvas.width;

    //   const FILEURI = canvas.toDataURL('image/png');
    //   let PDF = new jsPDF('p', 'px', 'a4');
    //   let position = 16;
    //   PDF.addImage(FILEURI, 'PNG', position, position, fileWidth, fileHeight);

    //   PDF.save('angular-demo.pdf');
    // });
  }
}
