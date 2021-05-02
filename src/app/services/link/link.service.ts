import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LinkService {
  constructor(private http: HttpClient) {}

  createShortUrl(link) {
    // return
  }

  apiStatus() {
    console.log(environment.apiUrl);

    return this.http.get(`${environment.apiUrl}`).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
