import { Component, OnInit } from "@angular/core";
import { LinkService } from "./services/link/link.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.linkService.apiStatus().subscribe((res) => {
      console.log(res);
    });
  }

  dynamicText() {
    return "https://google.com";
  }
}
