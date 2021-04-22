const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");
test("Insufficient params", () => {
  const main = spawn("node", ["main.js", "avg"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });
  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Insufficient parameter!");
  });
});
test("Wrong command", () => {
  const main = spawn("node", ["main.js", "0", "3", "5"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });
  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Wrong Command!");
  });
});

test("Repeat working1", () => {
  const main = spawn("node", ["main.js", "med", 1, 2, 3, "4@5"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });
  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("4");
  });
});
test("Repeat working2", () => {
  const main = spawn("node", ["main.js", "min", 1, "2@2", 3, "4@5"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });
  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("1");
  });
});
test("Repeat working3", () => {
  const main = spawn("node", ["main.js", "avg", 5, 3, 4, "4@5"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });
  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("4");
  });
});
