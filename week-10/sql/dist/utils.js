"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getclient = void 0;
const pg_1 = require("pg");
function getclient() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionString = "postgres://snghlffr:gNoiN9_iPTa-u-DnxiXhHYWtPoh7-mcM@jelani.db.elephantsql.com/snghlffr";
        try {
            const client = new pg_1.Client(connectionString);
            yield client.connect();
            console.log("Connected to the database");
            return client;
        }
        catch (error) {
            console.error("Error connecting to the database:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    });
}
exports.getclient = getclient;
