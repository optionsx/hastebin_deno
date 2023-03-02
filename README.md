# Hastebin for Deno (https://deno.land/x/hastebin)
why not

### to run an example
```bash
deno run --allow-net https://deno.land/x/hastebin/example.ts
```

### Example code
```TS
import hasteBin from "https://deno.land/x/hastebin/mod.ts";

const theCode = `type type = {
    accessToken: string;
    sessionToken: string;
    refresh: number;
  };
  const getNewToken = async (
    e: string,
    p: string,
  ): Promise<type> => {
    return (await axios.post(
      "https://c1dfd63b-9ba9-44e6-ba03-5234352754b4.id.repl.co/login",
      { email: e, password: p, headers: { "Content-Type": "application/json" } },
    )).data;
  };
  
  const e: type = await getNewToken(
    "e@d.c",
    "p",
  );
  console.log(e);`;

const type = "ts"; // optional
const link = await hasteBin(theCode, type); // type is optional

console.log(link);
