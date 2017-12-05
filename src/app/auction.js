"use strict";
exports.__esModule = true;
var Auction = /** @class */ (function () {
    function Auction(properties) {
        this._totalFinalValue = -1.00;
        this.id = properties.id;
        this.theme = properties.theme;
        this.items = new Array();
        this.bids = new Array();
        this.bidders = new Array();
        this.totalInitValue = properties.totalInitValue;
        this.auctioneer = properties.auctioneer;
        this.opensAt = properties.opensAt;
        this.closesAt = properties.closesAt;
    }
    Auction.prototype.isAuctioneerAuthorized = function (auctioneer, auctioneers) {
        if (auctioneers.indexOf(auctioneer) > -1) {
            return true;
        }
        return false;
    };
    Auction.prototype.isBidderAuthorized = function (bidder) {
        if (this.bidders.indexOf(bidder) > -1) {
            return true;
        }
        return false;
    };
    Auction.prototype.isItemOnAuction = function (item) {
        if (this.items.indexOf(item) > -1) {
            return true;
        }
        return false;
    };
    Auction.prototype.findMaxBidValue = function () {
        var bidValues = new Array();
        var i = 0;
        for (; i < this.bids.length; i++) {
            bidValues.push(this.bids[i].value);
        }
        return Math.max.apply(Math, bidValues);
    };
    return Auction;
}());
exports.Auction = Auction;
