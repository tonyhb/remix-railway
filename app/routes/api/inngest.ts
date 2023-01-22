import { Inngest } from "inngest";
import { serve } from "inngest/remix";

const client = new Inngest({ name: "Test remix app" });

const fn = client.createFunction("Test function on remix", "auth/user.created", ({ event }) => {
  return "ok";
});

const handler = serve(
  client,
  [fn],
);

export { handler as loader, handler as action };
