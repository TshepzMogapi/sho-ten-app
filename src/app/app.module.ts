import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LinkService } from "./services/link/link.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClipboardModule,
  ],
  providers: [LinkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
