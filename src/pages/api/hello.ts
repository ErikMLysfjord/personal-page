// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

export const getFunFact = async () =>
  await axios
    .get('https://api.api-ninjas.com/v1/facts?limit=1', {
      headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY },
    })
    .then((res) => alert(res.data[0].fact));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' });
}
