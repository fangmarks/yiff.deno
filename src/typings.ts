export interface Post {
    id: string;
    page: string;
    tags: {
      [
        k in
          | "general"
          | "species"
          | "character"
          | "copyright"
          | "artist"
          | "invalid"
          | "lore"
          | "meta"
      ]: string[];
    };
    sources: string[];
    score: number;
    fav_count: number;
    artist: string[];
    image?: string; // can technically be absent in some cases
    md5: string;
    useragent: string;
  }