import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }
}

export const Constant ={
  API_END_POINT : 'https://freeapi.miniprojectideas.com/api/BigBasket/',
  METHODS :{
    GET_ALL_PRODUCT :'',
    GET_ALL_CATEGORY:'GetAllCategory'
  }
}