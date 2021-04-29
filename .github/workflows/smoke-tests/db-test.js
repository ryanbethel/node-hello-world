const tiny = require("tiny-json-http");
const test = require("tape");
const sandbox = require("@architect/sandbox");

const baseUrl = "http://localhost:3333";

// this starts a sandbox environment for the tests to excecute in.
test("start", async (t) => {
    t.plan(1);
    await sandbox.start();
    t.ok(true, "started");
});

test("postgres sql test", async (t) => {
    let numberRequests = 40;
    t.plan(1);

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny.get({ url: baseUrl, data: { bypass: false } }).catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "postgres sql test");
});
test("postgres in bypass test", async (t) => {
    let numberRequests = 40;
    t.plan(1);

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny.get({ url: baseUrl, data: { bypass: true } }).catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "postgres in bypass test");
});

test("prisma test", async (t) => {
    let numberRequests = 40;
    t.plan(1);

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny
                    .get({ url: baseUrl + "/prisma", data: { bypass: false } })
                    .catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "prisma test");
});

test("prisma in bypass test", async (t) => {
    let numberRequests = 40;
    t.plan(1);

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny
                    .get({ url: baseUrl + "/prisma", data: { bypass: true } })
                    .catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "prisma in bypass test");
});

// this ends sandbox
test("end", async (t) => {
    t.plan(1);
    await sandbox.end();
    t.ok(true, "ended");
});
