let version = "0.0.1"
let useragent = `deno-esix/${version} (werewolf.design/deno-esix)`
interface Post {
    id: string;
    page: string;
    tags: {[k in "general" | "species" | "character" | "copyright" | "artist" | "invalid" | "lore" | "meta"]: string[];};
    sources: string[];
    score: number;
    fav_count: number;
    artist: string[];
    image?: string; // can technically be absent in some cases
    md5: string;
    useragent: string;
}
export async function search(tags: string){
    const response = await fetch(`https://e621.net/posts.json?limit=1&tags=order:random type:png type:jpg ${tags} -young`, {
        headers: {"User-Agent": useragent}
    })
    let Post : Post = await response.json()
    return Post
}