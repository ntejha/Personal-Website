# SEO Analysis Report — Tejhalabs

## Overall Score: 62/100

### Quick Wins 🚀
1. Add a canonical URL to each page
2. Add an Open Graph image (1200×630px) for social sharing
3. Add `aria-label` to search inputs for accessibility
4. Add a `<meta name="viewport">` tag (Next.js does this automatically ✅)

---

## 1. Keyword Analysis

### Primary Keywords
| Keyword | Density | Title | H1 | First 100 Words | Headings |
|---------|---------|-------|----|-----------------|----------|
| data engineer | ✅ Present | ✅ "Data Engineer Portfolio" | ❌ Missing ("Building digital experiences that matter") | ✅ "data engineer" in hero text | ❌ |
| portfolio | ✅ Present | ✅ In title | ❌ | ❌ | ❌ |
| Tejha / Tejhalabs | ✅ Present | ✅ "Tejhalabs" | ❌ | ❌ | ❌ |

### Secondary / LSI Keywords (Missing)
- "data pipelines" — in meta description only, not in page body
- "ETL" — not present anywhere
- "real-time streaming" — in hero text only ✅
- "ML infrastructure" — in hero text only ✅
- "Apache Airflow", "Snowflake", "Spark" — not present (add when projects go live)

### Recommendations
- **H1 should contain primary keyword.** Current H1 is "Building digital experiences that matter." which is brand-focused but has zero keyword value.
  
  **Before:** `Building digital experiences that matter.`
  
  **After:** `Data Engineer building scalable pipelines that matter.`

- Add a short intro paragraph on the homepage mentioning "data engineer portfolio" and "tech blog" naturally.

---

## 2. Content Structure

### Heading Hierarchy

| Page | H1 | H2s | H3s | Issues |
|------|-----|-----|-----|--------|
| `/` (Home) | "Building digital experiences that matter." | "Featured Work", "Latest from the Blog" | "Coming Soon" ×2 | ⚠️ H1 lacks keywords |
| `/blog` | "Latest Writings" | None | "Coming Soon" | ⚠️ No H2 subheadings |
| `/projects` | "Selected Work" | None | "Coming Soon" | ⚠️ No H2 subheadings |

### Issues Found
- 🚨 **Home H1 has no keywords** — "Building digital experiences that matter" doesn't help search engines understand what the site is about
- ⚠️ **Blog and Projects have no H2s** — When content is added, each blog card title should be an H2 or have structured heading within the article
- ✅ Heading hierarchy doesn't skip levels (good)
- ✅ Single H1 per page (good)

---

## 3. Readability Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Flesch Reading Ease | ~70 (estimated) | 60–70 | ✅ Good |
| Grade Level | ~7 | 7–9 | ✅ Good |
| Avg Sentence Length | ~14 words | <20 words | ✅ Good |
| Passive Voice | ~5% | <10% | ✅ Good |
| Content Depth | Very thin | 300+ words per page | 🚨 Critical |

### Issues
- 🚨 **All pages are content-thin** — Home, Blog, and Projects pages have "Coming Soon" placeholders with ~20 words of body text each. Google may consider these "thin content" and not index them well.
- **Recommendation:** Add at least 150–300 words of introductory content to each page, even in Coming Soon state. Example: on the Blog page, describe what topics you'll cover.

---

## 4. Technical SEO Elements

| Element | Status | Details |
|---------|--------|---------|
| Meta Title | ✅ Done | "Tejhalabs — Data Engineer Portfolio" (39 chars, under 60 ✅) |
| Title Template | ✅ Done | `%s \| Tejhalabs` format |
| Meta Description | ✅ Done | 92 chars — could be longer (target: 150–160) |
| Blog Meta | ✅ Done | Via `blog/layout.tsx` |
| Projects Meta | ✅ Done | Via `projects/layout.tsx` |
| Keywords | ✅ Done | 6 keywords listed |
| Open Graph | ✅ Done | type, locale, siteName, title, description |
| Twitter Card | ✅ Done | summary_large_image, creator @ntejha04 |
| OG Image | ❌ Missing | No `opengraph-image.png` — social shares will look plain |
| Canonical URL | ❌ Missing | Add `metadataBase` to layout |
| Favicon | ❌ Missing | No custom favicon |
| Sitemap | ✅ Done | `/sitemap.xml` with 3 pages |
| Robots.txt | ✅ Done | Allows all crawlers |
| JSON-LD | ✅ Done | Person schema with social links |
| `lang` attribute | ✅ Done | `<html lang="en">` |
| Viewport | ✅ Auto | Next.js handles this |

### Critical Missing Items

**1. `metadataBase` (Canonical URL)**
```tsx
// Add to layout.tsx metadata
metadataBase: new URL("https://tejhalabs.dev"),
```
Without this, OG URLs and canonical links won't resolve correctly.

**2. Meta Description Too Short**
- Current: 92 characters
- Target: 150–160 characters

**Before:** `Personal tech portfolio and blog by Tejha — building scalable data pipelines and modern architectures.`

**After:** `Personal tech portfolio and blog by Tejha Nagarjan — a Data Engineer building scalable data pipelines, real-time streaming systems, and modern cloud architectures. Explore projects and articles.`

**3. OG Image**
Place a `opengraph-image.png` (1200×630px) in `src/app/` for rich social previews on Twitter and LinkedIn.

---

## 5. Content Quality (E-A-T Signals)

| Signal | Status | Notes |
|--------|--------|-------|
| Author Name | ✅ | "Tejha" in metadata and JSON-LD |
| Author Credentials | ❌ | No "About" page with bio, education, experience |
| Social Proof | ✅ | GitHub, LinkedIn, X links in footer and JSON-LD |
| Contact Info | ✅ | Email link in header and footer |
| Content Originality | ⚠️ | No content yet — all "Coming Soon" |
| External References | ❌ | No outbound links to authoritative sources |
| Update Frequency | ❌ | No content updates since launch |

### Recommendations
- Create an `/about` page with your bio, experience, and education
- When blog posts go live, link to authoritative sources (docs, papers)
- Add a profile photo / avatar for E-A-T credibility

---

## 6. Accessibility & Performance (SEO Impact)

| Item | Status |
|------|--------|
| Alt text on images | ⚠️ Spline 3D has no alt text fallback |
| Search input labels | ❌ Missing `aria-label` on search inputs |
| Skip-to-content link | ❌ Missing |
| Color contrast | ✅ Good (dark theme) |
| Font loading | ✅ `next/font` (no layout shift) |
| Spline 3D lazy load | ✅ Dynamic import |
| RSS link | ⚠️ Points to `#` (broken) |

---

## 7. Internal Linking

| From | To | Status |
|------|-----|--------|
| Home → Projects | `/projects` | ✅ |
| Home → Blog | `/blog` | ✅ |
| Header → All pages | `/`, `/blog`, `/projects` | ✅ |
| Footer → All pages | Sitemap links | ✅ |
| Blog → Individual posts | ❌ Not yet (no content) |
| Projects → Live demos | ❌ Not yet (no content) |
| Cross-linking between pages | ❌ None |

---

## Implementation Checklist

### 🚨 Critical (Fix Now)
- [ ] Add `metadataBase: new URL("https://tejhalabs.dev")` to layout.tsx metadata
- [ ] Expand meta description to 150–160 characters
- [ ] Rewrite H1 to include "Data Engineer" keyword
- [ ] Add at least 150 words of intro content to Blog and Projects pages

### ⚠️ High Priority
- [ ] Create an OG image (1200×630px) as `src/app/opengraph-image.png`
- [ ] Add a custom favicon in `src/app/favicon.ico`
- [ ] Add an About page (`/about`) with bio and credentials
- [ ] Fix RSS link in footer (remove or make functional)
- [ ] Add `aria-label` attributes to search inputs

### 📋 Medium Priority
- [ ] Create per-blog-post OG images when content is added
- [ ] Add `Article` JSON-LD schema to individual blog posts
- [ ] Add FAQ schema if applicable
- [ ] Set up Google Search Console and submit sitemap
- [ ] Add privacy-friendly analytics (Plausible/Umami)

---

## Estimated Impact

| Action | Time | Expected Impact |
|--------|------|-----------------|
| Fix meta titles + descriptions | 15 min | High — controls what shows in Google results |
| Add OG image | 20 min | High — massively improves social sharing CTR |
| Keyword-rich H1 | 5 min | Medium — helps Google understand page intent |
| Add content to Coming Soon pages | 30 min | High — prevents thin content penalties |
| About page | 30 min | Medium — E-A-T credibility |
| Google Search Console | 10 min | High — ensures Google discovers and indexes pages |
| **Total** | **~2 hours** | **Significant ranking improvement** |
| **Timeframe** | | **2–4 weeks for results** |
