import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningComponent } from './pages/learning/learning.component';
import { FoodTableComponent } from './components/tables/food-table/food-table.component';
import { InputCTComponent } from './components/inputs/input-ct/input-ct.component';
import { InputTitleComponent } from './components/inputs/input-title/input-title.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ProgrammingLanguageComponent } from './components/ui/programming-language/programming-language.component';
import { OtherSkillsComponent } from './components/ui/other-skills/other-skills.component';
import { WorkingExperienceComponent } from './components/ui/working-experience/working-experience.component';
import { EducationComponent } from './components/ui/education/education.component';
import { CertificateComponent } from './components/ui/certificate/certificate.component';
import { ProjectComponent } from './components/ui/project/project.component';
import { ReferenceComponent } from './components/ui/reference/reference.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TestComponent } from './pages/test/test.component';
import { CreateCVComponent } from './pages/createcv/createcv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LearningComponent,
    FoodTableComponent,
    InputCTComponent,
    InputTitleComponent,
    ProgrammingLanguageComponent,
    OtherSkillsComponent,
    WorkingExperienceComponent,
    EducationComponent,
    CertificateComponent,
    ProjectComponent,
    ReferenceComponent,
    LoginComponent,
    CreateCVComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
