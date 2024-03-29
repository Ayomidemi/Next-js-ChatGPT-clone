import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryAPI";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a question!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  //   ChatGPT query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT could not find an answer for that!",
  };

  res.status(200).json({ name: "John Doe" });
}
