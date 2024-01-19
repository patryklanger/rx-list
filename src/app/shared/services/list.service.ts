import { Injectable } from "@angular/core";
import { ListElement } from "../list-element/list-element.model";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  getList$(): ListElement[] {
    return Array.from({ length: 10000 }, (_, index) => ({
      id: `id-${index + 1}`,
      title: `Element ${index + 1}`,
      description: `Description ${index + 1}`,
      imageUrl: '/assets/homework.jpg',
      handled: false
    }));
  }
}
