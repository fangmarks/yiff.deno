import Version from "./version.ts";

export default {
  useragent: `deno-esix/${Version} (werewolf.design/deno-esix)`,
  URL: `https://e621.net/posts.json`,
  md5RegURL: new RegExp(
    "((?:!)?https?://static[0-9]*.(?:e621|e926).net/data/(?:sample/|preview/|)[0-9a-f]{2}/[0-9a-f]{2}/([0-9a-f]{32}).([0-9a-z]+))",
    "igm",
  ),
  md5RegNoURL: new RegExp("([0-9a-f]{32})", "igm"),
};
