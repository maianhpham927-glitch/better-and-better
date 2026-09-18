---
layout: default
title: Góc nhỏ
permalink: /goc-nho/
---
<section class="page-intro"><div class="paper-card"><p class="eyebrow">lặt vặt đáng yêu</p><h1>Góc nhỏ</h1><p>Nơi tớ lưu lại những điều không gọi thành tên: vài bản nhạc, một buổi chiều trong veo, một chiếc lá rơi bên cửa sổ.</p></div></section>
<section class="post-section"><div class="post-list">{% for post in site.posts %}<article class="post-card"><time>{{ post.date | date: '%d · %m · %Y' }}</time><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3><p>{{ post.excerpt | strip_html | truncate: 120 }}</p><a class="read-more" href="{{ post.url | relative_url }}">đọc tiếp →</a></article>{% endfor %}</div></section>

