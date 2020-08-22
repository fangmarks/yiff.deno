# esix

`esix` is a [e621] Search Library. It's [Lio's] first Deno Library and will (most likely) recieve future updates to include more functions.

Please do not expect good code for this, yet. esix is my first Deno Lib.



**IT DOES NOT RETURN IMAGES TAGGED WITH `-young` OR TAGS THAT ARE RELATED TO IT WITHIN THE E621 API** (cub, shota, .etc)

## Example Usage
```ts
import {search} from 'https://x.nest.land/esix@0.0.4/mod.ts';

search('<Your Search Tags>').then(r => console.log(r));
// returns
// Post {
//     id: string;
//     page: string;
//     tags: {[k in "general" | "species" | "character" | "copyright" | "artist" | "invalid" | "lore" | "meta"]: string[];};
//     sources: string[];
//     score: number;
//     fav_count: number;
//     artist: string[];
//     image?: string; // can technically be absent in some cases
//     md5: string;
//     useragent: string;
// }
```




[e621]: https://e621.net
[Lio's]: https://lio.wtf