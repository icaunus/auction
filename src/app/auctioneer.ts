import {Actor} from './actor';
import {Auction} from './auction';
import {Bid} from './bid';
import {Bidder} from './bidder';
import {Item} from './item';

export class Auctioneer implements Actor {
  public name:string;
  public auction:Auction;

  constructor(name:string) {
    this.name = name;
  }

  public acceptBid(bid:Bid):void {
    let screen:HTMLDivElement = document.querySelector("screen");

    // 
    screen.innerText = "Bid = " + bid.value;
  }

  public evaluateBid(bidder:Bidder, item:Item, value:number):boolean {
    let isBidAccepted:boolean = false;
    let bid:Bid = undefined;

    isBidAccepted =  
      this.auction.isBidderAuthorized(bidder) && 
      this.auction.isItemOnAuction(item) && 
      value > this.auction.findMaxBidValue();

    if (isBidAccepted) {
      bid = {
        bidderName: bidder.name,
        value:value
      };
      this.acceptBid(bid);
      return true;
    }

    return false;
  }
}
