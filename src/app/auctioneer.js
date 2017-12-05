"use strict";
exports.__esModule = true;
var Auctioneer = /** @class */ (function () {
    function Auctioneer(name) {
        this.name = name;
    }
    Auctioneer.prototype.acceptBid = function (bid) {
        this.auction.bids.push(bid);
        console.log("Bid = " + bid.value);
    };
    Auctioneer.prototype.evaluateBid = function (bidder, item, value) {
        var isBidAccepted = false;
        var bid;
        isBidAccepted =
            this.auction.isBidderAuthorized(bidder) &&
                this.auction.isItemOnAuction(item) &&
                value > this.auction.findMaxBidValue();
        if (isBidAccepted) {
            bid = {
                bidderName: bidder.name,
                value: value
            };
            this.acceptBid(bid);
            return true;
        }
        return false;
    };
    Auctioneer.prototype.setFinalItemPrice = function (item) {
        item.finalPrice = this.auction.findMaxBidValue();
    };
    return Auctioneer;
}());
exports.Auctioneer = Auctioneer;
