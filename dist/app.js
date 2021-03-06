"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./app/routes/routes");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var url = process.env.MONGOURL || "mongodb://localhost:27017/servicesystem";
console.log(url);
var App = /** @class */ (function () {
    function App() {
        try {
            console.log('info', 'Initializing Application');
            console.log('time  ' + +new Date());
            this.app = express_1.default();
            this.initializeMiddleware();
            this.setupRoutes();
            this.mongoSetup();
        }
        catch (err) {
            console.log(err);
        }
    }
    App.prototype.initializeMiddleware = function () {
        this.app.use(cors_1.default()); // Use CORS
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(function (err, req, res, next) {
            if (err.isBoom) {
                return res.status(err.output.statusCode).json(err.output.payload);
            }
        });
    };
    App.prototype.setupRoutes = function () {
        this.storageRoutes = new routes_1.MainRoute();
        this.storageRoutes.intializeRoute(this.app);
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.connect(url, { useNewUrlParser: true }).then(function (res) {
            console.log("connection successful url:" + url);
        }).catch(function (err) {
            console.log(err);
        });
    };
    return App;
}());
exports.App = App;
