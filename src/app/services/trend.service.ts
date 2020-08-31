import { Cacheable } from 'ngx-cacheable';
import { Injectable } from '@angular/core';
import { Trend } from '../entities/trend';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(private http: HttpClient) { }

  trend='/ef/public/home/trend';

  dummyTrendActiveList: Trend[] = [];
  trendActiveSource = new BehaviorSubject(this.dummyTrendActiveList);
  productActiveListObservable = this.trendActiveSource.asObservable();

  getAllTrends(): Observable<Trend[]>{
    return this.http.get<Trend[]>(environment.serverUrl+this.trend+'/getAll');
  }

  @Cacheable()
  getActiveTrends(): Observable<Trend[]>{
    return this.http.get<Trend[]>(environment.serverUrl+this.trend+'/getActive');
  }

  addTrend(body: any): Observable<Trend>{
    return this.http.post<Trend>(environment.serverUrl+this.trend+'/add',body);
  }

  getTrendById(): Observable<Trend[]>{
    return this.http.get<Trend[]>(environment.serverUrl+this.trend+'/getById');
  }
  


  
   
 
}
