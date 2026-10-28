# Your engineering portfolio — ready for GitHub Pages

This is a complete, free, responsive portfolio website made from plain HTML, CSS, and JavaScript. **You don't need to write code to publish it.** All project descriptions, links, and personal information live together in **`site-data.js`**.

## First: preview your website

1. Unzip the download onto your computer.
2. Double-click `index.html` to open it in Chrome/Edge. It works directly from your computer. The project filters and detail pages should work, too.
3. You can also open the unzipped folder in Visual Studio Code using **File → Open Folder**.

## Publish for free with GitHub Pages (simplest way)

1. Open your **public** GitHub repository.
2. At the top of the file list, select **Add file → Upload files** (GitHub's current menus may vary slightly).
3. **Unzip the downloaded ZIP first.** Drag all the files and the `assets` folder **from inside the unzipped folder** into GitHub. Do **not** upload the ZIP as a single file. `index.html` must appear at the repository's top level, not inside a nested folder.
4. Scroll down and choose **Commit changes**.
5. Open your repository's **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to `Deploy from a branch`, **Branch** to `main`, and the folder to `/(root)`. Select **Save**.
7. Return to **Settings → Pages** and look for **Visit site** after the deployment finishes. GitHub says publishing can take up to 10 minutes.

### What will the free link be?

- Repository named `YOURUSERNAME.github.io` → `https://YOURUSERNAME.github.io`
- Repository named `engineering-portfolio` → `https://YOURUSERNAME.github.io/engineering-portfolio/`

Replace `YOURUSERNAME` with your GitHub username. For a free account, the repository must be **public**.

## Personalize your portfolio (no code knowledge required)

Open **`site-data.js`** in Visual Studio Code. You only need to change the words inside quotes.

### 1. Basic information

Near the top, find:

```js
name: "Maxwell Serna",
headline: "Ideas become better when they're built.",
intro: "A collection of engineering research ...",
about: "I'm a mechanical engineering student ...",
email: "",
linkedin: "",
github: "",
resume: "",
```

Update your intro and About text. Add an email and full links to your LinkedIn/GitHub profiles when you want them visible. Empty links are intentionally hidden to avoid broken buttons. **Add your preferred professional contact details before sharing the website with recruiters.**

**For your résumé:** Place a PDF at `assets/resume.pdf` and set `resume: "assets/resume.pdf"`.

### 2. Change a project's name or description

Scroll to `projects` and locate the project you want. Update `title`, `summary`, `tags`, `overview`, `role`, and `sections`. The longer `sections` entries appear on that project's own detail page.

**Important:** Existing project text is starter copy only. Please review and correct it to match your actual work, permission to share it, and verified results.

### 3. Add real project photos

1. Copy your photo to `assets/images/axotomy.jpg`, for example.
2. In `site-data.js`, find the matching project and change:

```js
image: "",
```

to:

```js
image: "assets/images/axotomy.jpg",
```

The stylized illustration will be replaced by your photo. If the image fails to load, the illustration stays visible.

**Tips:** Use wide landscape photos, avoid very large files, and don't share restricted research images without permission. Files above 25 MiB cannot be uploaded using GitHub's browser uploader.

### 4. Add or remove projects

To add a project, duplicate a complete `{ ... }` project entry (including its opening and closing braces) in `site-data.js`, keeping commas between entries. Give every project a unique `id`, for example `id: "solar-car"`. Change its text and category. If a category is new, a filter button is automatically created.

To remove the placeholder project, delete the entry whose ID is `future-project` (and fix any surrounding commas).

### 5. Publish changes later

If you edit your files in VS Code, upload the changed files again to the matching place in your repository and commit. GitHub Pages automatically republishes changes pushed to your configured branch. You can also edit `site-data.js` directly on GitHub with the pencil icon.

## Which files do what?

- `index.html` — homepage structure
- `project.html` — reusable page for each project
- `site-data.js` — **your personal text, links, and project information**
- `app.js` — automatically builds the cards, filters, and detail pages
- `styles.css` — colors, fonts, layout, and responsive design
- `assets/images/` — your photos
- `.nojekyll` — ensures GitHub Pages serves the files as-is

## Important

This portfolio contains sample wording and project metadata. No performance metrics, experimental results, or proprietary data were invented. Replace the sample descriptions with information you have confirmed. Your repository and published site are public.

GitHub's official help:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
