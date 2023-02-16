import { clients, refreshClients } from "../../private/clients.js";

export class App {
  constructor(config) {
    this.config = config;
  }

  async vibrate(duration) {
    await refreshClients();

    let client = clients[this.config.client];

    return (await client.request("automate_vibrate", "vibrate", [duration]))
      .result
      ? "Success"
      : "Error";
  }
}
