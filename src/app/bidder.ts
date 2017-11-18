import {Actor} from './actor';
import {Auctioneer} from './auctioneer';
import {Item} from './item';

export class Bidder implements Actor {
  public name:string;
  private _assets: number;

  constructor(name:string, assets: number) {
    this.name = name;
    this._assets = assets;
  }

  public makeBid(auctioneer: Auctioneer, item:Item, value:number):void {
    auctioneer.evaluateBid(this, item, value);
  }
}
