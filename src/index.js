import { config } from "./modules/config";
import AppService from "./modules/app.service";
import "./modules/header.component";
import "./css/index.css";
import "./less/index.less";
import "./scss/index.scss";
import "./modules/ts.module";

console.log("config key", config.key);

const service = new AppService("Hello world!");
service.log();
