// Turns every Markdown file in posts/ into posts.json for the blog.
// Files whose names start with "_" (like _template.md) are skipped.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "posts";
const out = process.argv[2] || "posts.json";
const posts = [];

for (const file of readdirSync(dir).filter(f => f.endsWith(".md") && !f.startsWith("_")).sort()) {
  const raw = readFileSync(join(dir, file), "utf8").replace(/\r/g, "");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  if (m) for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  const body = (m ? m[2] : raw).trim();
  const slug = file.replace(/\.md$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const date = /^\d{4}-\d{2}-\d{2}$/.test(meta.date || "") ? meta.date : (file.match(/^(\d{4}-\d{2}-\d{2})/) || [])[1] || "";
  if (!meta.title || !body) { console.warn(`Skipped ${file}: it needs a title and some text.`); continue; }
  if (meta.draft === "true") { console.log(`Draft, not published: ${file}`); continue; }
  posts.push({ id: slug, title: meta.title, category: meta.category || "Notes", date, cover: meta.cover || "", body });
}
writeFileSync(out, JSON.stringify(posts, null, 2));
console.log(`Built ${posts.length} post(s) into ${out}`);
