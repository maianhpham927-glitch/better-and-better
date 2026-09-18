# better and better

Jekyll theme dành cho blog truyện, sẵn sàng xuất bản bằng GitHub Pages.

## Đưa trang lên GitHub Pages

1. Tạo một repository mới trên GitHub (ví dụ: `better-and-better`).
2. Đẩy toàn bộ các tệp trong thư mục này lên nhánh `main`.
3. Mở **Settings → Pages**, chọn **Deploy from a branch**, sau đó chọn `main` và thư mục `/(root)`.
4. Chờ GitHub hoàn tất build. Địa chỉ trang sẽ hiện tại mục Pages.

Theme dùng đường dẫn `relative_url`, vì vậy hoạt động được cả tại tên miền gốc lẫn repository project page. Không cần cài plugin Jekyll bên ngoài.

## Viết bài mới

Tạo tệp theo mẫu `_posts/YYYY-MM-DD-ten-bai.md`:

```yaml
---
layout: post
title: "Tên chương hoặc bài viết"
date: 2026-09-18 20:00:00 +0700
category: Truyện đang viết
status: ongoing # hoặc completed
excerpt: "Đoạn giới thiệu ngắn hiện trên trang chủ."
---
```

`status: completed` sẽ hiện ở **Truyện đã hoàn thành**; `status: ongoing` sẽ hiện ở **Truyện chưa hoàn thành**. Thay liên kết `#` tại phần footer bằng liên kết Facebook, WordPress và Wattpad thật trước khi xuất bản.

