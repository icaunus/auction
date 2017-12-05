import {AuctionProperties} from './auction-properties';
import {Auctioneer} from './auctioneer';
import {Bid} from './bid';
import {Bidder} from './bidder';
import {Item} from './item';

export class Auction {
  private _totalFinalValue:number;
  public id:number;
  public theme:string;
  public items:Array<Item>;
  public bids:Array<Bid>;
  public bidders:Array<Bidder>;
  public totalInitValue:number;
  public auctioneer:Auctioneer;
  public opensAt:Date;
  public closesAt:Date; 

  constructor(properties:AuctionProperties) {    
    this._totalFinalValue = -1.00;
    this.id = properties.id;
    this.theme = properties.theme;
    this.items = new Array<Item>();
    this.bids = new Array<Bid>();
    this.bidders = new Array<Bidder>();
    this.totalInitValue = properties.totalInitValue;
    this.auctioneer = properties.auctioneer;
    this.opensAt = properties.opensAt;
    this.closesAt = properties.closesAt;
  }

  public isAuctioneerAuthorized(auctioneer:Auctioneer, auctioneers:Array<Auctioneer>):boolean { 
    if (auctioneers.indexOf(auctioneer) > -1) {
      return true;
    }

    return false;
  }

  public isBidderAuthorized(bidder:Bidder):boolean {
    if (this.bidders.indexOf(bidder) > -1) {
      return true;
    }
    
    return false;
  }    

  public isItemOnAuction(item:Item):boolean {
    if (this.items.indexOf(item) > -1) {
      return true;
    }

    return false;
  }

  public findMaxBidValue():number {
    let bidValues:Array<number> = new Array<number>();
    let i:number = 0;

    for (; i < this.bids.length; i++) {
      bidValues.push(this.bids[i].value);
    }

    return Math.max(...bidValues);
  }
}
