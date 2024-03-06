import * as assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { exec } from "child_process";

When("program is executed for filtering with the command {string}", function (command) {
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

Then("output should include elements containing the pattern, like {string}", function (pattern) {
  assert.match(this.stdout, new RegExp(pattern));
});

Then("console output should be {string}", function (expectedOutput) {
  assert.equal(this.stdout, expectedOutput);
});
