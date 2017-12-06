import {Actor} from './actor';
import {Auctioneer} from './auctioneer';
import {Item} from './item';

export class Bidder implements Actor {
  public name:string;
  public currentItem:Item;
  private _assets: number;

  constructor(name:string, assets: number) {
    this.name = name;
    this._assets = assets;
  }

  public makeBid(auctioneer: Auctioneer, item:Item, value:number):boolean {
    if (! this.currentItem) {
      this.currentItem = item;
    }

    if (item === this.currentItem) {
      auctioneer.evaluateBid(this, item, value);
      return true;
    }

    return false;
  }
}
