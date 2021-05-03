import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LinkService } from "./services/link/link.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { RedirectComponent } from "./redirect/redirect.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AnalyticsComponent,
    RedirectComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [LinkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
