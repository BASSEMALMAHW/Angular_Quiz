import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

/**
 * Parameters
 */
const endpoint_users = 'https://reqres.in/api/users?page=';
const endpoint_user = 'https://reqres.in/api/users/';

@Injectable({
  providedIn: 'root'
})

export class UserManagmentService {

/**
 *
 * @param http
 */
  constructor(private http: HttpClient) { }
  //-----------------------------------------------------------------------------------

/**
 *
 * @param params
 * @returns
 */
  fetchAllUsers(params : any) : Observable<any>{
    return this.http.get(endpoint_users + params ).pipe(
      catchError(this.handleError<any>('fetchAllUsers', []))
    );
  }
    //-----------------------------------------------------------------------------------

  /**
   *
   * @param params
   * @returns
   */
  fetchUserById(params : any) : Observable<any>{
    return this.http.get(endpoint_user + params ).pipe(
      catchError(this.handleError<any>('fetchUserById', []))
    );
  }
    //-----------------------------------------------------------------------------------

  /**
   *
   * @param operation
   * @param result
   * @returns
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
