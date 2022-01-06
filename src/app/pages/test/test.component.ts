import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import LocalStorage from 'src/app/localStorage';
import { AppState } from 'src/app/reducers';
import { AuthInterface } from 'src/app/reducers/auth/auth';
import { Post } from 'src/app/reducers/post/post';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import * as AuthActions from '../../reducers/auth/auth.action';
import * as PostActions from '../../reducers/post/post.action';
import masterData, { SkillObj } from './masterdata.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  selectedFile = new Blob();
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  masterData: SkillObj[] = masterData;
  testSelect = new FormControl();
  selectList: string[] = ['a', 'b', 'c'];

  message$?: Observable<string>;
  post$: Observable<Post>;
  text?: string;
  auth: Observable<AuthInterface> | undefined;

  constructor(
    private digitalcvSv: DigitalcvComponent,
    private store: Store<AppState>,
    private localStorage: LocalStorage
  ) {
    this.digitalcvSv.getCVManagement().subscribe((managementData) => {
      // console.log({ managementData });
    });
    this.message$ = this.store.select('message');
    this.post$ = this.store.select('post');
    this.auth = this.store.select('auth');
  }

  public onFileChanged(event: any) {}

  onUpload() {}

  getImage() {}

  ngOnInit(): void {}

  onChangeA() {
    this.store.dispatch({ type: 'ABC' });
  }
  onChange123() {
    this.store.dispatch({ type: '123' });
  }
  editText() {
    this.store.dispatch(new PostActions.EditText({ text: this.text }));
  }
  upVote() {
    this.store.dispatch(new PostActions.Upvote());
  }
  downVote() {
    this.store.dispatch(new PostActions.Downvote());
  }
  resetVote() {
    this.store.dispatch(new PostActions.Reset());
  }
  setLocal() {
    this.localStorage.login({ username: 'Ace', email: 'asdasd@sdasd.ciom' });
    this.store.dispatch(
      new AuthActions.UpdateAuth({
        username: 'Ace',
        email: 'asdasd@sdasd.ciom',
      })
    );
  }
}
