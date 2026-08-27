import assert from "node:assert/strict";
import { once } from "node:events";
import { test } from "node:test";

import app from "../app";

test("GET /health returns the backend health payload", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("The test server did not expose a TCP address");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/health`);
    const body = (await response.json()) as {
      status: string;
      service: string;
      timestamp: string;
    };

    assert.equal(response.status, 200);
    assert.deepEqual(body.status, "ok");
    assert.deepEqual(body.service, "backend");
    assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T/);
  } finally {
    server.close();
    await once(server, "close");
  }
});
