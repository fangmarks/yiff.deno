export interface Post {
  id: string;
  created_at: string;
  updated_at: string;
  file: {
    width: number;
    height: number;
    ext: string;
    md5: string;
    url: string;
  };
  preview: {
    width: number;
    height: number;
    url: string;
  };
  sample: {
    has: boolean;
    height: number;
    width: number;
    url: string;
    alternates: {}; // @TODO
  };
  score: {
    up: number;
    down: number;
    total: number;
  };
  tags: Record<
    | "general"
    | "species"
    | "character"
    | "copyright"
    | "artist"
    | "invalid"
    | "lore"
    | "meta",
    string[]
  >;
  locked_tags: string[];
  change_seq: number;
  flags: Record<
    | "pending"
    | "flagged"
    | "note_locked"
    | "status_locked"
    | "rating_locked"
    | "deleted",
    boolean
  >;
  rating: "s" | "q" | "e";
  fav_count: number;
  sources: string[];
  pools: number[];
  relationships: {
    parent_id: number | null;
    has_children: boolean;
    has_active_children: boolean;
    children: number[];
  };
  approver_id: number | null;
  uploader_id: number | null;
  description: string;
  comment_count: number;
  is_favorited: boolean;
  has_notes: boolean;
  duration: number | null;
}

export interface NullableURLPost {
  id: string;
  created_at: string;
  updated_at: string;
  file: {
    width: number;
    height: number;
    ext: string;
    md5: string;
    url: string | null;
  };
  preview: {
    width: number;
    height: number;
    url: string | null;
  };
  sample: {
    has: boolean;
    height: number;
    width: number;
    url: string | null;
    alternates: {}; // @TODO
  };
  score: {
    up: number;
    down: number;
    total: number;
  };
  tags: Record<
    | "general"
    | "species"
    | "character"
    | "copyright"
    | "artist"
    | "invalid"
    | "lore"
    | "meta",
    string[]
  >;
  locked_tags: string[];
  change_seq: number;
  flags: Record<
    | "pending"
    | "flagged"
    | "note_locked"
    | "status_locked"
    | "rating_locked"
    | "deleted",
    boolean
  >;
  rating: "s" | "q" | "e";
  fav_count: number;
  sources: string[];
  pools: number[];
  relationships: {
    parent_id: number | null;
    has_children: boolean;
    has_active_children: boolean;
    children: number[];
  };
  approver_id: number | null;
  uploader_id: number | null;
  description: string;
  comment_count: number;
  is_favorited: boolean;
  has_notes: boolean;
  duration: number | null;
}
