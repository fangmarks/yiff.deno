# esix

`esix` is a [e621] Search Library. It's [Lio's] first Deno Library and will (most likely) recieve future updates to include more functions.

## Example Usage
```ts
import {request} from 'esix-url';

request('<Your Search Tags>').then(r => console.log(r));
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