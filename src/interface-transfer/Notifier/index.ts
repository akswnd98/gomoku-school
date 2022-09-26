import Observer from '../Observer';

export type ConstructorParam = {
  observers: Observer[];
};

export default class Notifier {
  observers: Observer[];

  constructor (payload: ConstructorParam) {
    this.observers = payload.observers;
  }

  async notify (e: any) {
    await Promise.all(this.observers.map((observer) => observer.update(this, e)));
  }

  registerObserver (observer: Observer) {
    this.observers.push(observer);
  }

  registerObservers (observers: Observer[]) {
    this.observers.push(...observers);
  }
}
