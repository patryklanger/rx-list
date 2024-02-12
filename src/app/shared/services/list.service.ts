import { Injectable } from "@angular/core";
import { ListElement } from "../list-element/list-element.model";
import { LoremIpsum } from "lorem-ipsum";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list$: Observable<ListElement[]>;

  private lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  private _list$ = new BehaviorSubject<ListElement[]>([]);

  constructor() {
    this.list$ = this._list$.asObservable();
  }

  initList(randomDesc = false) {
    this._list$.next(this.getList(randomDesc));
  }

  deleteElement(id: string) {
    const list = this._list$.value.filter(element => element.id !== id);
    this._list$.next(list);
  }

  private getList(randomDesc = false): ListElement[] {
    return Array.from({ length: 10000 }, (_, index) => ({
      id: `id-${index + 1}`,
      title: `Element ${index + 1}`,
      description: randomDesc ? this.lorem.generateWords(this.randomIntFromInterval(1, 100)) : `Description ${index + 1}`,
      imageUrl: '/assets/homework.jpg',
      handled: false
    }));
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
