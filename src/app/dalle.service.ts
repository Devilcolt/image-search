import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DalleService {

  private headers = {
    'X-RapidAPI-Key': '17f87f333emshff154a04bb29554p1ac694jsncc6b6af96fbc',
    'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com'
  };

  constructor(private http: HttpClient) { }

  searchImages(query: string) {
    const params = {
      q: query,
    };
    const apiUrl = `https://porn-gallery.p.rapidapi.com/pornos/${params.q}`
    return this.http.get(apiUrl, { headers: this.headers});
  }
}
