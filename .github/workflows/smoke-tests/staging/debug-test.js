const tiny = require("tiny-json-http");
const test = require("tape");

const baseUrl = "http://localhost:3333";

test("Sanity Test Staging", async (t) => {
    t.plan(1);
    t.ok(true, "Sanity Test Staging");
});
