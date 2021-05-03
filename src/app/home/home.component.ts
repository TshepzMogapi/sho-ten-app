import { Component, OnInit } from "@angular/core";
import { LinkService } from "../services/link/link.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  originalLink: string;
  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.linkService.apiStatus().subscribe((res) => {
      console.log(res);
    });
  }

  createShortUrl() {
    this.isLoading = true;

    this.linkService
      .createShortUrl({ link: this.originalLink })
      .subscribe((res) => {
        this.isLoading = false;
        console.log(res);
      });
  }

  dynamicText() {
    return "https://google.com";
  }
}
