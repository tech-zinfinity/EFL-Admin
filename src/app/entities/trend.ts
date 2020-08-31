import { Pricing } from './pricing';

export interface Trend {
  tempImage: any;
  id?:string,
  name?:string,
  productList?:ProductShortInfo[],
  active?:boolean
 
  
}
export interface ProductShortInfo{
    id?:string,
    displayName?:string,
    active?:string,
    images?:string[],
    price?:number,
    offerprice?:number,
    location?:string,
    tempImages?:string[]
}
