import { Component, OnInit } from "@angular/core";
import { LinkService } from "../services/link/link.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.linkService.apiStatus().subscribe((res) => {
      console.log(res);
    });
  }

  createShortUrl() {
    this.linkService.createShortUrl({ link: "test.com" }).subscribe((res) => {
      console.log(res);
    });
  }

  dynamicText() {
    return "https://google.com";
  }
}
