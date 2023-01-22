import { Inngest } from "inngest";
import { serve } from "inngest/remix";

const client = new Inngest({ name: "Test remix app" });

const fn = client.createFunction("Test function on remix", "demo/event.sent", ({ event }) => {
  return { data: "ok", event };
});

const handler = serve(
  client,
  [fn],
);

const loader = async (args: any) => {
  try {
    const json = JSON.stringify(args);
    console.log(json);
  } catch(e) {
  }
  console.log("GET", args, args.method);
  const response = await handler(args);
  return response;
}

const action = async (args: any) => {
  try {
    const json = JSON.stringify(args);
    console.log(json);
  } catch(e) {
  }
  console.log("ACTION", args, args.method);
  const response = await handler(args);
  return response;
}

export { loader, action };
