"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
var HealthController = /** @class */ (function () {
    function HealthController() {
    }
    HealthController.getHealth = function (req, res) {
        try {
            res.status(200).json({ message: "Status Up" });
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    };
    return HealthController;
}());
exports.HealthController = HealthController;
