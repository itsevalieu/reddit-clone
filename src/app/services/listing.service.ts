import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://www.reddit.com/r';

  getNextListing(
    listing: string,
    count?: number,
    after?: string
  ): Observable<any> {
    let url = `${this.baseUrl}/${listing}/top.json?limit=10`;
    if (count) {
      url += `&count=${count}`;
    }
    if (after) {
      url += `&after=${after}`;
    }
    console.log('The url ', url);

    const options = {
      headers: {
        // 'User-Agent': 'MyAPI/0.0.1',
        // 'Authorization': 'Bearer '
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // Authorization: `Bearer ${access_token}`,
      },
    };
    return this.http.get<any>(url, options);
  }
  getPreviousListing(
    listing: string,
    count?: number,
    before?: string
  ): Observable<any> {
    let url = `${this.baseUrl}/${listing}/top.json?limit=10`;
    if (count) {
      url += `&count=${count}`;
    }
    if (before) {
      url += `&before=${before}`;
    }
    console.log('The url ', url);

    const options = {
      headers: {},
    };
    return this.http.get<any>(url, options);
  }
}

// this.getToken().subscribe((res) => console.log('TOKEN?', res));
// getToken() {
//   const id = environment.CLIENT_ID;
//   const secret = environment.CLIENT_SECRET;
//   const password = 'codemore';
//   const username = 'dear_stranger';
//   console.log(secret, id);
//   // const basicAuth = Buffer.from(`${id}:${secret}`).toString('base64');
//   const params = new URLSearchParams();
//   params.append('grant_type', 'client_credentials');
//   params.append('username', username);
//   params.append('password', password);
//   return this.http.post(
//     'https://www.reddit.com/api/v1/access_token',
//     params
//     // { headers: { Authorization: `Basic ${basicAuth}` } }
//   );
// }
