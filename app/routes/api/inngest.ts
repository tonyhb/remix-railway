import { Inngest } from "inngest";
import { serve } from "inngest/remix";

const client = new Inngest({ name: "Test remix app" });

const fn = client.createFunction("Test function on remix", "auth/user.created", ({ event }) => {
  return { data: "ok", event };
});

const handler = serve(
  client,
  [fn],
);

const wrapper = (args: any) => {
  const response = handler(args);

  try {
    const json = JSON.stringify(args);
    console.log(json);
  } catch(e) {
  }

  console.log(args, response);

  return response;
}

export { wrapper as loader, wrapper as action };
