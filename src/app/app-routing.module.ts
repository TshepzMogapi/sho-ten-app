import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "analytics", component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
