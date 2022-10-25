import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [
    {
      id :"1",
      title :"Statue of Liberty",
      image :"https://fotos.perfil.com/2021/06/08/trim/1140/641/estatua-de-la-libertad-20210608-1187839.jpg",
      comments:["Awesome place", "wonderful experience"]

    },

    {
      id :"2",
      title :"Iguazu Falls",
      image :"https://viajes.nationalgeographic.com.es/medio/2014/05/19/agmi1502_1000x666.jpg",
      comments:["Awesome place"]

    }
  ]


  constructor() { }

  getplaces() {

    return[...this.places]
  }

  getplace(placeId: string) {
    return{
      ...this.places.find(place=> {
        return place.id === placeId
      })
    }
  }

  addplaces() {}

  delete() {}
}
