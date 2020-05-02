---
to: content/posts/<%= h.date() %>-<%= h.slugify(title) %>.md
unless_exists: true
---
---
title: "<%= h.inflection.humanize(title) %>"
date: <%= h.date() %>
categories:
  - category
tags:
  - tag
template: post
thumbnail: "../thumbnails/thumbnail.png"
banner: ""
slug: "<%= h.slugify(title) %>"
---

The Post starts here