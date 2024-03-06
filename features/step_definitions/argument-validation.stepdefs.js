import * as assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { exec } from "child_process";

When("program is executed with unvalid arguments: {string}", function (command) {
  const world = this;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      world.stdout = stdout.trim();
      world.stderr = stderr.trim();
      if (error) reject(error);
      resolve();
    });
  });
});

Then("output should contain {string}", function (expectedOutput) {
  assert.match(this.stdout, new RegExp(expectedOutput));
});
