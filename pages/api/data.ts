// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Data } from '../../models/types';

import data from './search_by_date';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ hits: Data[] }>
) {
  res.status(200).json(data);
}
