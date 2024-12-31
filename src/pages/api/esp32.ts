import type { NextApiRequest, NextApiResponse } from "next/types";
import axios from 'axios'
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
const { output, state } = req.query
  axios.get(`${process.env.ESP32URL}/update?output=${output}&state=${state}`)
  res.status(200).json({ message: 'OK' })
}