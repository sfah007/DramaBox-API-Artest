
import { getRecommendedBooks } from "../api/drama.js";

export default async function handler(req, res) {
  try {
    const data = await getRecommendedBooks();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
