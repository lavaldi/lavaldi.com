---
to: content/posts/<%= h.date() %>-<%= h.slugify(name) %>.md
unless_exists: true
---
---
title: "<%= h.inflection.humanize(name) %>"
date: <%= h.date() %>
categories:
  - category
tags:
  - tag
template: post
thumbnail: "../thumbnails/thumbnail.png"
slug: "<%= h.slugify(name) %>"
---

The Post starts here