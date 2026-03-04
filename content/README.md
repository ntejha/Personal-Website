# Content Directory

## Adding Blog Posts

1. Create a new `.md` file in `content/blog/` (e.g. `my-first-post.md`)
2. Copy the frontmatter from `_template.md` and fill in your details
3. Place any images in `public/images/blog/`
4. Reference images as `/images/blog/filename.jpg`

## Adding Projects

1. Create a new `.md` file in `content/projects/` (e.g. `data-lake.md`)
2. Copy the frontmatter from `_template.md` and fill in your details
3. Place screenshots in `public/images/projects/`
4. Reference images as `/images/projects/filename.jpg`

## Frontmatter Fields

### Blog Posts
| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Post title |
| `date` | ✅ | Publication date (YYYY-MM-DD) |
| `summary` | ✅ | Card description |
| `tags` | ✅ | Array of tags |
| `category` | ❌ | Category name |
| `image` | ❌ | Cover image path |
| `author` | ❌ | Author name |
| `readingTime` | ❌ | Reading time in seconds |

### Projects
| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Project title |
| `description` | ✅ | Short description |
| `tech` | ✅ | Array of technologies |
| `category` | ❌ | Category (Pipelines, Cloud, ML) |
| `liveUrl` | ❌ | Demo link |
| `sourceUrl` | ❌ | GitHub link |
| `image` | ❌ | Screenshot path |
| `icon` | ❌ | Emoji icon |
