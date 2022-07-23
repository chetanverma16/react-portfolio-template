import fs from "fs";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  const postsfolder = join(process.cwd(), `/_posts/${uuidv4()}.md`);
  const dummyPost = join(process.cwd(), "/dummyMarkdown/dummy.md");
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      const data = fs.readFileSync(dummyPost);
      fs.writeFileSync(postsfolder, data, (err) => console.error(err));
      res.status(200).json({ status: "CREATED" });
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
