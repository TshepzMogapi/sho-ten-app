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
  isSuccesful = false;
  url: string;
  constructor(private linkService: LinkService) {}

  ngOnInit() {}

  createShortUrl() {
    this.isLoading = true;

    this.linkService
      .createShortUrl({ link: this.originalLink })
      .subscribe((res: any) => {
        this.isLoading = false;
        console.log(res);

        if (res.success) {
          this.isSuccesful = true;
          this.url = res.body.url;
        }
      });
  }

  copyToClipBoard() {
    return this.url;
  }
}
