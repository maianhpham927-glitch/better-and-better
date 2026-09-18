---
layout: default
title: Truyện đã hoàn thành
permalink: /hoan-thanh/
---
<section class="page-intro"><div class="paper-card"><p class="eyebrow">thư viện mùa hạ</p><h1>Truyện đã hoàn thành</h1><p>Những câu chuyện đã khép lại, nhưng dư âm vẫn ở đây. Cậu có thể sắp xếp bài viết bằng <code>categories</code> khi thêm truyện mới.</p></div></section>
<section class="post-section"><div class="post-list">{% assign completed = site.posts | where: 'status', 'completed' %}{% for post in completed %}<article class="post-card"><time>{{ post.date | date: '%d · %m · %Y' }}</time><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3><p>{{ post.excerpt | strip_html | truncate: 120 }}</p><a class="read-more" href="{{ post.url | relative_url }}">đọc truyện →</a></article>{% endfor %}</div></section>

