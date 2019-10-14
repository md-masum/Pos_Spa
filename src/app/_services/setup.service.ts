import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_model/pagination';
import { Category } from '../_model/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

// Category Section
getCategorys(page?, itemPerPage?): Observable<PaginatedResult<Category[]>> {
  const paginatedResult: PaginatedResult<Category[]> = new PaginatedResult<Category[]> ();

  let params = new HttpParams();

  if (page != null && itemPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemPerPage);
  }

  return this.http.get<Category[]>(this.baseUrl + 'category', {observe: 'response', params}).pipe(
    map(response => {
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') != null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}
}
