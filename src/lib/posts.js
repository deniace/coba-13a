import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectroy = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postDirectroy);
  const allPostData = fileNames.map((fileName) => {
    // remove ".md from file name to get id"
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postDirectroy, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // use gray matter to parse the post metadata section
    const matterResult = matter(fileContent);

    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // sort posts by date
  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectroy);

  let id = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });

  console.log(`all post `);
  console.log(id);
  return id;
}

export function getPostData(id) {
  const fullPath = path.join(postDirectroy, `${id}.md`);
  console.log(fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // combine the data and the id
  return {
    id,
    ...matterResult.data,
  };
}
