// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
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

import data from './search_by_date';

console.log(data);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ hits: Data[] }>
) {
  res.status(200).json(data);
}
