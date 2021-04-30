import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private apiPath: string = environment.apiPath;

  constructor(
    private _http: HttpClient
  ) { }

  getFromApi = <T>(url: string, param?: any | null ): Promise<T> => {
    return this._http
      .get<T>( this.apiPath + url + ( param ? "/" + param: '' ), {observe: 'response'})
      .pipe(
        map( response => {
          return response.body as T
        } )).toPromise();
  }

  postToApi = <T>( url: string, body?: any ): Promise<T> => {
    return this._http
      .post<T>( this.apiPath + url, body, { headers: {
        'Content-Type': 'application/json; charset-utf-8',
        'Access-Control.Allow-Origin': '*'
      }, observe: 'response' } )
      .pipe(
        map( response => {
          return response.body as T
        } ) ).toPromise();
  }

  putToApi = <T>(url: string, body?: any): Promise<T> => {
    return this._http
      .put<T>( this.apiPath + url, body, {headers: {
        'Content-Type': 'application/json; charset-utf-8',
        'Access-Control-Allow-Origin': '*'
      }, observe: 'response' })
      .pipe(
        map( response => {
          return response.body as T;
        } )).toPromise()
  }

  deleteToApi = <T>(url: string, params?: any ): Promise<T> => {
    return this._http
      .delete<T>( this.apiPath + url, { observe: 'response', params: params} )
      .pipe(
        map( response => {
          return response.body as T;
        })
       ).toPromise();
  }

  patchToApi = <T>( url: string, body: any): Promise<T> => {
    return this._http
      .patch<T>( this.apiPath + url, body, { headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }, observe: 'response' })
      .pipe(
        map( response => {
          return response.body as T;
        } )
      ).toPromise();
  }

}
