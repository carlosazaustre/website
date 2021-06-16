const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generate() {
  const feed = new RSS({
    title: "Carlos Azaustre - Desarrollo y Formación JavaScript",
    site_url: "https://carlosazaustre.es",
    feed_url: "https://carlosazaustre.es/rss.xml",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "posts"));

  await Promise.all(
    posts.map(async (file) => {
      const content = await fs.readFile(
        path.join(__dirname, "..", "data", "posts", file)
      );
      const frontmatter = matter(content);
      const item = {
        title: frontmatter.data.title,
        url: `https://carlosazaustre.es/${file.replace(/\.mdx?/, "")}`,
        date: frontmatter.data.date,
      };
      if (frontmatter.data?.summary) {
        item.description = frontmatter.data.summary;
      }

      feed.item(item);
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
}

generate();
