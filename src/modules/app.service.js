export default class AppService {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log("[App Service:]", this.name);
  }
}
