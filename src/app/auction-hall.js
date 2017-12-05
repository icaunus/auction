"use strict";
//
exports.__esModule = true;
var auction_1 = require("./auction");
var auctioneer_1 = require("./auctioneer");
var bidder_1 = require("./bidder");
var auctions = new Array();
var auction0 = null;
var auctioneers = new Array();
var auctioneer0 = new auctioneer_1.Auctioneer("John Doe");
var properties = {
    id: 1,
    theme: "Classic cars",
    totalInitValue: 100000,
    auctioneer: auctioneer0,
    opensAt: new Date(10, 0),
    closesAt: new Date(10, 15)
};
var bidders = new Array();
var bidder0 = new bidder_1.Bidder("Alf Biedermeier", 150000);
var bidder1 = new bidder_1.Bidder("Chloe Durant", 250000);
var items = new Array();
var item0 = {
    name: "1930 Buick Roadmaster",
    initPrice: 20000,
    currentPrice: 0,
    finalPrice: 0,
    isForSale: true
};
var item1 = {
    name: "1931 Peerless V12",
    initPrice: 50000,
    currentPrice: 0,
    finalPrice: 0,
    isForSale: true
};
var item2 = {
    initPrice: 70000,
    name: "1932 Marmon V16",
    currentPrice: 0,
    finalPrice: 0,
    isForSale: true
};
//
auction0 = new auction_1.Auction(properties);
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
setTimeout(function () { }, 5000);
bidder0.makeBid(auctioneer0, item1, 50000);
setTimeout(function () { }, 15000);
auctioneer0.setFinalItemPrice(item1);
console.log("fp=" + item1.finalPrice);
