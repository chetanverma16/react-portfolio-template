import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  const postsfolder = join(process.cwd(), `/_posts/`);
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      console.log(
        matter.stringify(req.body.content, { title: req.body.title })
      );
      // fs.writeFile(
      //   postsfolder + req.body.slug + ".md",
      //   JSON.stringify(req.body.content),
      //   "utf-8",
      //   (err) => console.log(err)
      // );
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
