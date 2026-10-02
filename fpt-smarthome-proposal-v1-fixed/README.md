# FPT Smart Home Proposal V1.0.1 — bản sửa Vercel

Giữ giao diện V1: hồ sơ khách hàng, bốn nhóm giải pháp, mô phỏng đèn/rèm, bộ lọc phòng, dự toán, bản vẽ minh họa và in/PDF.

## Đưa lên GitHub → Vercel
1. Giải nén ZIP. Upload **các file bên trong** vào repository. `package.json`, `package-lock.json`, `vercel.json`, `app/`, `components/`, `data/` phải nằm ngay tại gốc repository.
2. Nếu repository cũ có V2, nên tạo repository mới cho V1 để tránh trộn file.
3. Vercel → Add New Project → Import repository.
4. Framework Preset: Next.js. Root Directory: thư mục có `package.json` (để trống nếu nằm tại gốc).
5. Node.js: 24.x. Install Command: `npm ci`. Build Command: `npm run build`. Output Directory: để mặc định, không nhập `out`, `dist` hoặc `public`.
6. Deploy. Nếu dùng project cũ, bỏ các cấu hình build/output cũ và Redeploy không dùng cache.

Không cần database, API key hay Environment Variables.

## Chạy trên máy
Node.js 24.x:
```sh
npm ci
npm run typecheck
npm run build
npm start
```
Sau đó mở http://localhost:3000.

## Chỉnh nội dung
- `data/proposal.ts`: khách hàng, thiết bị, số lượng, giá, tỷ lệ lắp đặt và chiết khấu.
- `app/globals.css`: giao diện.
- `components/InteractiveDemo.tsx`: ngữ cảnh đèn/rèm.
- `public/images/`: ảnh thật để bổ sung. Hiện V1 dùng phối cảnh và mặt bằng CSS minh họa.
- Tổng báo giá tự tính = tổng thiết bị + lắp đặt − chiết khấu. VAT chưa được xác định trong dữ liệu mẫu.

## Các lỗi đã sửa
- `EstimateItem` từ kiểu object sang tuple đúng với dữ liệu và cách sử dụng: lỗi TypeScript có thể làm build thất bại.
- Tổng báo giá tự tính thay vì lấy con số cứng.
- Ngữ cảnh Ra ngoài đóng rèm; tên phòng điều khiển khớp tab đang chọn.
- Script `next lint` không còn dùng; thay bằng `typecheck`.
- Bổ sung lockfile và cấu hình Vercel để cài dependency nhất quán.

## Kiểm tra đã thực hiện
- Cài dependency thành công.
- `npm run typecheck`: PASS.
- `npm run build`: PASS, trang `/` được prerender thành công.
- Chạy production trên Node 24.19.0: HTTP 200, nội dung tiêu đề và tổng 122.226.300 đ đúng.
- Chưa kiểm tra giao diện bằng trình duyệt tự động vì môi trường không có Chromium.
- Chưa triển khai vào tài khoản Vercel của người dùng; log lỗi Vercel trước đó chưa được cung cấp.
