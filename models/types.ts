export type Data = {
  created_at: string;
  title: string | null;
  url: string | null;
  author: string;
  points: string | null;
  story_text: string | null;
  comment_text: string;
  num_comments: string | null;
  story_id: number;
  story_title: string;
  story_url: string;
  parent_id: number;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: object;
};

export type DataApi = {
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Data[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
};

export type DataSearch = {
  query: string;
  page: string;
};
