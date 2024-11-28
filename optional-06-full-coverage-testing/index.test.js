import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum should return the sum of two positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("sum should return 0 if one of the parameters is not a number", () => {
  assert.strictEqual(sum(2, "3"), 0);
  assert.strictEqual(sum("2", 3), 0);
  assert.strictEqual(sum("2", "3"), 0);
});

test("sum should return 0 if one of the parameters is negative", () => {
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

test("sum should return 0 if both parameters are zero", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("sum should return the correct sum for large numbers", () => {
  assert.strictEqual(sum(1000000000, 2000000000), 3000000000);
});

test("sum should return 0 if parameters are NaN", () => {
  assert.strictEqual(isNaN(sum(NaN, 3)), true);
  assert.strictEqual(isNaN(sum(3, NaN)), true);
});
