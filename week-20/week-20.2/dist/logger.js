"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
const gameManager = new store_1.GameManager();
function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000);
}
exports.startLogger = startLogger;
