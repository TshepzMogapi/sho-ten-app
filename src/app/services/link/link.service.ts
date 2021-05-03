import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LinkService {
  constructor(private http: HttpClient) {}

  createShortUrl(linkDto) {
    return this.http
      .post(`${environment.apiUrl}links`, {
        link: linkDto.link,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }

  getOriginalLink(urlId) {
    return this.http.get(`${environment.apiUrl}links?` + "url=" + urlId).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getLinkAnalytics(urlId) {
    return this.http
      .get(`${environment.apiUrl}links/analytics?` + "url=" + urlId)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  apiStatus() {
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
