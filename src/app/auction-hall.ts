//

import {Auction} from "./auction";
import {Auctioneer} from "./auctioneer";
import {AuctionProperties} from "./auction-properties";
import {Bidder} from "./bidder";
import {Item} from "./item";

let auctions:Array<Auction> = new Array<Auction>();
let auction0:Auction = null;
let auctioneers:Array<Auctioneer> = new Array<Auctioneer>();
let auctioneer0:Auctioneer = new Auctioneer("John Doe");
let properties:AuctionProperties = {
  id: 1,
  theme: "Classic cars",
  totalInitValue: 100000,
  auctioneer: auctioneer0,
  opensAt: new Date(10, 0),
  closesAt: new Date(10, 15)
};
let bidders:Array<Bidder> = new Array<Bidder>();
let bidder0:Bidder = new Bidder("Alf Biedermeier", 150000);
let bidder1:Bidder = new Bidder("Chloe Durant", 250000);
let items:Array<Item> = new Array<Item>();
let item0:Item = {
  name: "1930 Buick Roadmaster",
  initPrice: 20000,
  currentPrice: 0,
  finalPrice: 0,
  isForSale: true
};
let item1:Item = {
  name: "1931 Peerless V12",
  initPrice: 50000,
  currentPrice: 0,
  finalPrice: 0,
  isForSale: true
};
let item2:Item = {
  initPrice: 70000,
  name: "1932 Marmon V16",
  currentPrice: 0,
  finalPrice: 0,
  isForSale: true
};

//
auction0 = new Auction(properties);
auctions.push(auction0);

//
auctioneers.push(auctioneer0);
auctioneer0.auction = auction0;

//
items.push(item0);
items.push(item1);
items.push(item2);
auction0.items = items;

//
bidders.push(bidder0);
bidders.push(bidder1);
auction0.bidders = bidders;

bidder1.makeBid(auctioneer0, item1, 45000);
console.log("cp=" + item1.currentPrice);
setTimeout(() => {}, 5000);
bidder0.makeBid(auctioneer0, item1, 50000);
setTimeout(() => {}, 15000);
auctioneer0.setFinalItemPrice(item1);
console.log("fp=" + item1.finalPrice);
