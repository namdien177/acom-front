import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from '../../models/manga';
import { tap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  private urlHost:string = "http://localhost:3000/";
  private tokenAccess = "";

  private ordering:string = "order=";
  private paginate:string = "paginate=";
  private condition:string = "condition=";
  private name:string = "name="

  getAllManga(order:number = 0,paginateNumber:number = 15, condition:number = 0){
    let opt = "";
    if ((condition==0 || condition==1 || condition==2 ) && paginateNumber > 0 && paginateNumber<=50 && (order == 0 || order == 1)){
      opt+="?"+this.paginate+paginateNumber+"&"+this.ordering+order+"&"+this.condition+condition;
    }else{
      opt+="?"+this.paginate+"15"+"&"+this.ordering+"0"+"&"+this.condition+"0";
    }
    console.log(this.urlHost+"manga" + opt);
    return this.http.get<Manga[]>(this.urlHost+"manga"+opt)
    .pipe(
      debounceTime(500),
      tap(found => found),
      catchError(error => of([]))
    );
  }

  getManga(idManga:number):Observable<Manga>{
    return this.http.get<Manga[]>(this.urlHost+"manga/"+idManga).pipe(
      debounceTime(500),
      tap(found => found),
      catchError(error => of(null))
    );
  }

  searchManga(searchString:string,appear_result:number = 4, order:number = 0, condition:number = 0):Observable<Manga[]>{
    if(!searchString.trim()){
      return of([]);
    }

    if((appear_result >0 && appear_result <= 50) && (order == 0 || order == 1) && (condition == 0 || condition == 1 || condition == 2 || condition == 3)){
      let option ="";
      option += this.name+searchString+this.ordering+order+"&"+this.paginate+appear_result+"&"+this.condition+condition
      return this.http.get<Manga[]>(this.urlHost+'/manga?'+option)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(found => found),
        catchError(error => of([]))
      );
    }else{
      return of([]);
    }
  }
}
