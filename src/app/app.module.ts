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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearningComponent,
    FoodTableComponent,
    InputCTComponent,
    InputTitleComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
