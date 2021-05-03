import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LinkService } from "../services/link/link.service";

@Component({
  selector: "app-redirect",
  templateUrl: "./redirect.component.html",
  styleUrls: ["./redirect.component.scss"],
})
export class RedirectComponent implements OnInit {
  isInValid = false;
  constructor(private router: Router, private linkService: LinkService) {}

  ngOnInit(): void {
    const urlId = this.router.url.split("/")[1];
    this.linkService.getOriginalLink(urlId).subscribe((res: any) => {
      if (res.success) {
        window.location.href = res.body.link;
      } else {
        console.log(res);

        this.isInValid = true;
      }
    });
  }
}
