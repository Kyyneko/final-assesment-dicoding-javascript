import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// Menulis test untuk fungsi sum
test("sum should return the sum of two numbers", () => {
  // Uji kasus positif
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(-2, -3), -5);

  // Uji kasus dengan angka desimal
  assert.strictEqual(sum(1.5, 2.5), 4);
});
