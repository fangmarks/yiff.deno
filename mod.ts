// let egg:any;
// egg = JSON.parse(Deno.readTextFileSync('./egg.json'));
// console.log(egg);
import { Post } from "./src/typings.ts";

let useragent = `deno-esix/development (werewolf.design/deno-esix)`;
let URL = `https://e621.net/posts.json`;
let md5RegURL = new RegExp(
  "((?:!)?https?://static[0-9]*.(?:e621|e926).net/data/(?:sample/|preview/|)[0-9a-f]{2}/[0-9a-f]{2}/([0-9a-f]{32}).([0-9a-z]+))",
  "igm",
);
let md5RegNoURL = new RegExp("([0-9a-f]{32})", "igm");

export async function search(tags: string) {
  const response = await fetch(
    `${URL}?limit=1&tags=order:random type:png type:jpg ${tags} -young`,
    {
      headers: { "User-Agent": useragent },
    },
  );
  let Post: Post = await response.json();
  return Post;
}

async function sauceFetch(hash: string) {
  const response = await fetch(`${URL}?md5=${hash}`, {
    headers: { "User-Agent": useragent },
  });
  let res = await response.json();
  let post: Post = res.post;
  return post;
}

export async function sauce(md5: string) {
  if (md5.startsWith("http")) {
    let res = md5.match(md5RegURL);
    if (!res) throw new Error("Not a Valid e621 URL");
    let hash = md5.split(md5RegURL)[2];
    return await sauceFetch(hash);
  } else if (md5.match(md5RegNoURL)) return await sauceFetch(md5);
}
