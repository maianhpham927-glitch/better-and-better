---
layout: default
title: Truyện chưa hoàn thành
permalink: /dang-viet/
---
<section class="page-intro"><div class="paper-card"><p class="eyebrow">câu chuyện còn tiếp</p><h1>Truyện chưa hoàn thành</h1><p>Những chương mới sẽ luôn được đặt ở đây, để chúng mình cùng kiên nhẫn đi qua mùa hạ.</p></div></section>
<section class="post-section"><div class="post-list">{% assign ongoing = site.posts | where: 'status', 'ongoing' %}{% for post in ongoing %}<article class="post-card"><time>{{ post.date | date: '%d · %m · %Y' }}</time><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3><p>{{ post.excerpt | strip_html | truncate: 120 }}</p><a class="read-more" href="{{ post.url | relative_url }}">đọc chương →</a></article>{% endfor %}</div></section>

