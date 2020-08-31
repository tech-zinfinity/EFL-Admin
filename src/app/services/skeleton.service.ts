import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {

  constructor() { }

  repodata = [
    {title : 'Get the best out of bootstrap 4', description: 'i dunno this is demo bro', imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/1.jpg'},
    {title : 'Love is free shipping away', description: 'learn all you need in this', imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/4.jpg'},
    {title : 'Exploring the grass lands of Africa', description: 'the grass the green', imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/6.jpg'},
    {title : 'Roman PSD stuffs and more', description: 'learn all you need in this', imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/7.jpg'}
  ]
  
  careerdata=[
    {jobtitle: 'sales Executive', jobdescription : 'Min 2 Years Exp.', imageUrl :'https://picsum.photos/500/300/?image=10'},
    {jobtitle: 'Marketing Manager', jobdescription : 'Min 2 Years Exp.', imageUrl :'https://picsum.photos/500/300/?image=5'},
    {jobtitle: 'Support Engineer', jobdescription : 'Min 2 Years Exp.', imageUrl :'https://picsum.photos/500/300/?image=11'},

  ]
  
  userdata = { name: "Abbas Ogaji", email: "abbasogaji@example.com", address: "asalde"}
  obs = new Subject()
  fetchData(){
    setTimeout(() => {
        this.obs.next({userdata : this.userdata, repodata : this.repodata, careerdata : this.careerdata });
    }, 2000)
    return this.obs;
  }
}
