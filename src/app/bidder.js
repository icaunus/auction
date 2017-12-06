"use strict";
exports.__esModule = true;
var Bidder = /** @class */ (function () {
    function Bidder(name, assets) {
        this.name = name;
        this._assets = assets;
    }
    Bidder.prototype.makeBid = function (auctioneer, item, value) {
        if (!this.currentItem) {
            this.currentItem = item;
        }
        if (item === this.currentItem) {
            auctioneer.evaluateBid(this, item, value);
            return true;
        }
        return false;
    };
    return Bidder;
}());
exports.Bidder = Bidder;
