import { Cacheable } from 'ngx-cacheable';
import { Advertise } from './../entities/advertise';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisesService {

  constructor(private http: HttpClient) { }
  advertise = '/ef/public/home';

  getAllAdvertise(): Observable<Advertise[]> {
    return this.http.get<Advertise[]>(environment.serverUrl + this.advertise + '/ad/getAll');
  }

  @Cacheable()
  getAllActiveAdvertise(): Observable<Advertise[]> {
    return this.http.get<Advertise[]>(environment.serverUrl + this.advertise + '/ad/getActive');
  }

  addAdvertise(body: Advertise): Observable<Advertise> {
    return this.http.post<Advertise>(environment.serverUrl + this.advertise + '/ad/add', body);
  }

  addPhotoInAdvertise(ad: Advertise): Observable<Advertise> {
    return new Observable(observer => {
      this.http.post<Advertise>(environment.serverUrl + this.advertise + '/ad/addPhotoInAdvertise', ad)
        .subscribe(data => {
          observer.next(data);
          observer.complete();
        });
    });
  }

  getAdvertiseById(id: string): Observable<Advertise> {
    return new Observable(observer => {
      this.http.get<Advertise>(environment.serverUrl + this.advertise + '/ad/getById/' + id)
        .subscribe(data => {
          observer.next(data);
          observer.complete();
        });
    });
  }

}
