"use strict";
exports.__esModule = true;
var Bidder = /** @class */ (function () {
    function Bidder(name, assets) {
        this.name = name;
        this._assets = assets;
    }
    Bidder.prototype.makeBid = function (auctioneer, item, value) {
        auctioneer.evaluateBid(this, item, value);
    };
    return Bidder;
}());
exports.Bidder = Bidder;
