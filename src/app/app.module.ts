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
import { TestComponent } from './services/gets/test/test.component';
import { UserComponent } from './services/gets/user/user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProgrammingLanguageComponent } from './components/ui/programming-language/programming-language.component';
import { OtherSkillsComponent } from './components/ui/other-skills/other-skills.component';
import { WorkingExperienceComponent } from './components/ui/working-experience/working-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearningComponent,
    FoodTableComponent,
    InputCTComponent,
    InputTitleComponent,
    UserComponent,
    ProgrammingLanguageComponent,
    OtherSkillsComponent,
    WorkingExperienceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
