import { Browser } from "@axa-fr/cypress-component";

afterEach(function () {
  if (this.currentTest!.state !== "failed") {
    Browser.screenshot({ capture: "viewport" });
  }
});
