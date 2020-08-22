// let egg:any;
// egg = JSON.parse(Deno.readTextFileSync('./egg.json'));
// console.log(egg);
import {Post} from './src/typings.ts'

let useragent = `deno-esix/development (werewolf.design/deno-esix)`;
export async function search(tags: string) {
  const response = await fetch(
    `https://e621.net/posts.json?limit=1&tags=order:random type:png type:jpg ${tags} -young`,
    {
      headers: { "User-Agent": useragent },
    },
  );
  let Post: Post = await response.json();
  return Post;
}
