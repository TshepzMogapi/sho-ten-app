import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LinkService } from "../services/link/link.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  dataAnalytics;
  constructor(private router: Router, private linkService: LinkService) {}

  ngOnInit(): void {
    const urlId = this.router.url.split("/")[2];
    this.linkService.getLinkAnalytics(urlId).subscribe((res: any) => {
      if (res.success) {
        console.log(res);
        this.dataAnalytics = res.body;
      }
    });
  }
}
