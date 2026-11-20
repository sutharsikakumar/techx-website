# source-assets

Local-only source material. **Everything in this folder except this README is
git-ignored**, so big originals never end up in the repository or the build.

| Folder | What goes here |
|---|---|
| `community-originals/` | Full-size photos from phones and cameras (often 5–10 MB each). |
| `company-logos-original/` | The original company logo files, before they were cropped. |
| `design-files/` | The design export and brief, and the original brand PNG/JPG files. |

The website only uses the resized copies in `public/images/`. To add a community
photo, shrink a copy to about 640px tall (JPEG, under ~250 KB), put it in
`public/images/community/`, and list it in `src/content.ts`.
