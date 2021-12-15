---
to: data/blog/<%= h.slugify(title) %>.mdx
unless_exists: true
---
---
title: "<%= h.inflection.humanize(title) %>"
summary: ""
publishedAt: "<%= h.date() %>"
tags:
  - tag
banner: ""
---

The article starts here