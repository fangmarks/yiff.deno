import { Post } from "./src/typings.ts";
import constants from "./src/constants.ts";
import { getSauce } from "./src/utils.ts";

/**
 * Function
 * @param tags The Tags you want to search for
 * @param limit the amount of posts you want it to return 
 * @returns Post[]
 */
export async function search(tags: string, limit: number = 1) {
  const response = await fetch(
    `${constants.URL}?limit=${limit}&tags=order:random  ${tags} -young`,
    {
      headers: { "User-Agent": constants.useragent },
    },
  );
  const json = await response.json();
  const Posts: Post[] = json.posts
  return Posts;
}



export async function sauce(md5: string) {
  return await getSauce(md5);
}
