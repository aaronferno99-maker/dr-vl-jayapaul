# Dr. V.L. Jayapaul — website

Dean, School of Languages and Culture, and Associate Professor of English,
St. Joseph's College (Autonomous), Tiruchirappalli.

The site rebuilds and goes live by itself a minute or two after any change to this repository.

## Writing a blog post (from the GitHub website)

1. Open the **posts** folder in this repository.
2. Click **Add file → Create new file**.
3. Name it with the date and a short title, ending in `.md`, for example
   `2026-11-20-why-students-fear-speaking.md`.
4. Paste this at the top, then write the post underneath:

   ```
   ---
   title: Why students fear speaking, and how to help
   date: 2026-11-20
   category: Teaching
   ---
   Your first paragraph goes here.

   Leave an empty line between paragraphs.
   ```

5. Click **Commit changes**. The post appears on the website in a minute or two.

Formatting help is in `posts/_template.md`: headings, **bold**, *italics*, quotations,
lists, links and pictures.

**Pictures:** upload them to `posts/images` (Add file → Upload files) and use them as
`cover: posts/images/name.jpg` at the top, or inside the post as
`![description](posts/images/name.jpg)`.

**Editing or removing a post:** open its file and click the pencil to edit, or the
three-dot menu → Delete file.

**Keeping a draft:** add `draft: true` at the top; it stays hidden until you remove that line.

## Other changes

- Links (LinkedIn, Instagram, YouTube, reels) are in the `CONFIG` block near the top of the
  script in `index.html`.
- Photos live in `img/`.
