import constants from "./constants.ts";
import { Post } from "./typings.ts";
export async function getSauce(md5: string) {
    let hash = md5
    if (md5.startsWith('http')) {
        const res = md5.match(constants.md5RegURL);
        if (!res) throw new Error("Not a Valid e621 URL");
        hash = md5.split(constants.md5RegURL)[2];
    }
    else if (!md5.match(constants.md5RegNoURL)) {
        throw new Error("Not a valid md5 String")
    }
    const response = await fetch(`${constants.URL}?md5=${hash}`, {
        headers: { "User-Agent": constants.useragent },
    });
    const res = await response.json();
    const post: Post = res.post;
    return post;
}