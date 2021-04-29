const tiny = require("tiny-json-http");
const test = require("tape");

const baseUrl = "https://rugq9oorec.execute-api.us-east-1.amazonaws.com";

test("postgres sql test", async (t) => {
    t.plan(1);

    let numberRequests = 40;

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny.get({ url: baseUrl, data: { bypass: false } }).catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "postgres sql test");
});

test("postgres bypass test", async (t) => {
    t.plan(1);

    let numberRequests = 40;

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny.get({ url: baseUrl, data: { bypass: true } }).catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "postgres bypass test");
});
test("prisma test", async (t) => {
    t.plan(1);

    let numberRequests = 40;

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

test("prisma bypass test", async (t) => {
    t.plan(1);

    let numberRequests = 40;

    let results = await Promise.all(
        Array(numberRequests)
            .fill()
            .map((_, index) =>
                tiny
                    .get({ url: baseUrl + "/prisma", data: { bypass: true } })
                    .catch((e) => t.fail((index + 1).toString()))
            )
    );

    t.ok(true, "prisma bypass test");
});
