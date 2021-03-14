# esix

`esix` is a [e621] Search Library. It's [Lio's] first Deno Library and (might) recieve future updates to include more functions.

Please do not expect good code for this, yet. esix is my first Deno Lib.

Note: Posts with the Tag `young`, `cub`, etc. are automatically discarded by the E612, but I put `-young` into the request url anyways.

## Example Usage

```ts
import { sauce, search } from "https://x.nest.land/esix@0.0.5/mod.ts";

// search("tags you want to search for", limit_of posts returned)
const Search = await search("lio_(hokkqi)", 5);

console.log(Search);
```

[e621]: https://e621.net
[lio's]: https://himbo.cat
