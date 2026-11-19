# UX review, 20/11/2026

Bộ 60 câu hỏi ([ux-checklist.md](ux-checklist.md)) chạy trên bốn luồng: đặt món, nhận đơn, thanh toán, mở quán. Bằng chứng lấy từ code và chạy thử trên trình duyệt; các câu cần thiết bị thật ghi rõ là chưa thử.

**39 đạt · 6 đã sửa trong giai đoạn 3–5 · 14 một phần · 1 chưa đạt**

## Trạng thái và phản hồi

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 1 | Mỗi màn hình cho biết đang ở đâu | Đạt | Mọi trang con có header mũi tên + tên trang (PR #96); web có đường dẫn; tab đang chọn tô màu. |
| 2 | Phản hồi trong 100 ms, có tiến trình khi quá 1 giây | Đạt | Button có trạng thái loading; danh sách và trang đơn có skeleton. |
| 3 | Kết quả hiện đúng chỗ đang nhìn | Đã sửa | Vùng phản hồi theo lớp: dialog/sheet đang mở hoặc màn đang focus (giai đoạn 3–4). |
| 4 | Trạng thái đơn, tiền, quán bằng chữ, không chỉ màu | Đạt | Badge có chữ; "Thu tiền mặt khi giao · chưa thu"; thẻ "Bây giờ · Tiếp theo". |
| 5 | Phân biệt dữ liệu cũ và đang tải | Một phần | Có skeleton; danh sách chưa ghi "cập nhật lúc…" (chỉ trang đơn người bán báo mất kết nối trực tiếp). |

## Ngôn ngữ và thế giới thật

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 6 | Từ ngữ của khách và chủ quán | Đạt | Thông điệp viết lại theo công thức; riêng thẻ SePay buộc phải nói "webhook" vì đó là tên trong SePay. |
| 7 | Tiền, giờ, ngày, khoảng cách kiểu Việt Nam | Đạt | formatVnd, 14:02, 20/11 dùng chung hai app. |
| 8 | Thứ tự bước giống ngoài đời | Đạt | Chọn món → giỏ → địa chỉ → trả tiền → theo dõi. |
| 9 | Icon gợi đúng hành động, một hành động một icon | Một phần | Đã có từ điển icon (design/docs/icons.md); chưa rà hết từng màn. |

## Quyền kiểm soát

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 10 | Lối quay lại rõ, cùng một kiểu | Đạt | Một PageHeader mũi tên cho mọi trang con (web và mobile). |
| 11 | Hành động hoàn tác được có nút Hoàn tác | Đã sửa | Bỏ món cuối cùng khỏi giỏ giờ có snackbar "Hoàn tác" (đợt này). |
| 12 | Hành động không hoàn tác có bước xác nhận | Đạt | Huỷ đơn, xoá giỏ, "Đã nhận tiền", đổi tài khoản nhận tiền đều hỏi lại và nói hậu quả. |
| 13 | Thoát luồng dài không mất dữ liệu | Một phần | Mở quán có lưu nháp, giỏ hàng giữ trên máy; form món và địa chỉ mất nội dung nếu quay lại. |

## Nhất quán

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 14 | Cùng thành phần, cùng hành vi trên web và mobile | Đạt | Kit v5 cùng tên và props; token sinh từ một nguồn. |
| 15 | Chỉ dùng token | Một phần | Web không còn cỡ chữ Tailwind mặc định, hex hay chữ hoa; mobile còn khoảng 30 chỗ gọi font trực tiếp. |
| 16 | Một nút chính, cùng vị trí | Đạt | Nút cam duy nhất mỗi vùng; nút chính đặt cuối form. |
| 17 | Theo quy ước nền tảng | Đạt | Nút quay lại hệ điều hành, Esc đóng dialog web, Switch của hệ điều hành. |

## Ngăn lỗi

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 18 | Định dạng, gợi ý, mặc định giúp khó nhập sai | Đạt | Gợi ý địa chỉ, ô tiền chỉ nhận số, địa chỉ mặc định. |
| 19 | Bàn phím đúng loại | Đạt | phone-pad cho số điện thoại, number-pad cho giá, email-address cho email. |
| 20 | Nút bị khoá nói rõ còn thiếu gì | Đã sửa | Giỏ hàng: "Thêm địa chỉ giao hàng ở mục Giao đến để đặt đơn." (đợt này); đơn tối thiểu đã có. |
| 21 | Kiểm tra trước khi người dùng mất công | Đạt | Báo ngoài vùng giao ngay ở trang chủ; món hết, quán đóng hiện trước khi đặt. |

## Nhận ra thay vì nhớ

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 22 | Thông tin để quyết định nằm cùng màn | Đạt | Giỏ hiện tiền món, ưu đãi, phí giao, tổng ngay trên nút đặt. |
| 23 | Nhớ lựa chọn trước | Đã sửa | Địa chỉ mặc định có sẵn; cách trả tiền lần trước giờ được nhớ (đợt này). |
| 24 | Nhãn luôn hiện, không chỉ placeholder | Đạt | TextField/Input đặt nhãn phía trên. |

## Hiệu quả

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 25 | Lối tắt cho người quen dùng | Đạt | Đặt lại đơn cũ, tin trả lời mẫu, tìm trang Ctrl K trên web. |
| 26 | Luồng chính ít bước nhất | Đạt | Từ giỏ tới đặt đơn: một màn, một nút. |
| 27 | Lọc theo đúng thông tin hiển thị | Một phần | Trang chủ có lọc và tìm; chưa lọc theo khoảng cách, phí giao, đang mở. |

## Tối giản

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 28 | Một mục đích, một hành động chính mỗi màn | Đạt |  |
| 29 | Màu thương hiệu chỉ cho việc chính và mục đang chọn | Đạt |  |
| 30 | Không có màu, khối chỉ để trang trí | Đã sửa | Dải đầu tab Thanh toán dùng màu "thành công" để trang trí; đã đổi sang màu thương hiệu (đợt này). |
| 31 | Mỗi màn 3–5 cỡ chữ | Một phần | Đo được: trang quản lý 5–6 cỡ, landing 6 cỡ, đều trong thang 8 kiểu. |

## Lỗi và phục hồi

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 32 | Lỗi nằm cạnh chỗ có lỗi | Đạt | Lỗi ô nhập dưới ô; lỗi gửi form cạnh nút gửi. |
| 33 | Nói đúng vấn đề, không mã lỗi | Đạt | Máy chủ trả câu tiếng Việt; mã chỉ dùng trong code. |
| 34 | Đưa ra cách sửa | Một phần | Lỗi ô nhập có cách sửa; một số lỗi máy chủ chỉ nêu vấn đề. |
| 35 | Không đổ lỗi, không đùa | Đạt |  |
| 36 | Giữ dữ liệu đã nhập sau lỗi | Đạt | Form giữ state; lỗi không xoá giá trị (có test). |
| 37 | Mất mạng có thông báo riêng và tự thử lại | Đạt | Phân biệt máy mất mạng và máy chủ lỗi; đơn người bán tự tải lại mỗi 10 giây. |

## Trợ giúp

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 38 | Trợ giúp ngay trong ngữ cảnh | Một phần | Có mô tả dưới vài ô nhập; chưa có ở các trường khó (bán kính, VA SePay đã có). |
| 39 | Trung tâm trợ giúp tìm theo việc | Đạt | help.bonbon.pro.vn có tìm kiếm và bài theo bước. |
| 40 | Luôn liên hệ được người thật | Đạt | Liên hệ hỗ trợ và phiếu hỗ trợ trên cả hai app. |

## Thông điệp có bước tiếp theo

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 41 | Mỗi xác nhận nói ý nghĩa và việc tiếp theo | Đã sửa | Khoảng 130 thông điệp viết lại theo công thức (giai đoạn 3). |
| 42 | Toast chỉ cho việc hoàn tác được | Đạt | Còn 2 snackbar có chủ đích (hiện qua lần chuyển trang); còn lại là vùng phản hồi. |
| 43 | Tình trạng kéo dài dùng banner có hành động | Một phần | Quán tạm ngưng có banner; nợ phí chưa có banner (việc còn lại từ trước). |
| 44 | Hoàn thành luồng dẫn tới trang kết quả | Một phần | Đặt món dẫn tới trang đơn có thẻ "Bây giờ · Tiếp theo"; gửi hồ sơ mở quán chưa có trang kết quả riêng. |

## Thương mại điện tử (Baymard)

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 45 | Tổng cuối cùng hiện trước nút đặt | Đạt | Tổng đã gồm phí giao và giảm giá; nút ghi số tiền. |
| 46 | Xem món, giá, quán khi chưa đăng nhập | Đạt | Khách vãng lai xem và bỏ giỏ; đăng nhập ở bước đặt. |
| 47 | Ít nhất hai cách trả tiền, nói rõ sau khi trả | Đạt | Tiền mặt, MoMo, chuyển khoản, mỗi cách có giải thích. |
| 48 | Sau khi đặt có dòng thời gian và thời gian dự kiến | Một phần | Có 5 bước và tiến trình; máy chủ chưa tính giờ giao dự kiến. |
| 49 | Thẻ quán đủ để quyết định | Một phần | Có ảnh, tên, đánh giá, giá, giảm giá; thiếu thời gian giao ước tính. |

## Truy cập (WCAG 2.2)

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 50 | Tương phản 4,5:1 và 3:1 | Đạt | 59 test tự động đo mọi cặp màu ở hai giao diện. |
| 51 | Vùng chạm 44×44 | Đạt | touchTarget 48; tab người bán 44. |
| 52 | Không chỉ truyền đạt bằng màu | Đạt | Badge, thông điệp, trạng thái đều có chữ và icon. |
| 53 | Dùng được bằng bàn phím, viền focus rõ | Đạt | Viền focus 2 px màu thương hiệu trên mọi điều khiển web. |
| 54 | Không vỡ khi chữ phóng to | Một phần | Chữ theo rem/scale tới 200 %; chưa thử từng màn ở 200 %. |
| 55 | Trình đọc màn hình đọc nhãn và thay đổi | Một phần | Kit có nhãn và live region (có test); chưa thử với VoiceOver/TalkBack trên máy thật. |

## Góc nhìn chủ quán và chủ sản phẩm

| # | Câu hỏi | Kết quả | Bằng chứng |
|---|---|---|---|
| 56 | Mở app là biết việc cần làm | Đạt | Web "Cần làm ngay"; mobile mở vào đơn mới, có đếm ngược. |
| 57 | Mọi con số tiền có nguồn gốc | Đạt | Thu nhập có sổ từng dòng: đơn, hoa hồng, chi trả. |
| 58 | Thay đổi nhạy cảm có xác nhận và báo lại | Đạt | Đổi tài khoản nhận tiền cần đăng nhập lại và có thông báo. |
| 59 | Dùng được khi bận tay, bận mắt | Đạt | Nút lớn, âm báo và rung khi có đơn mới. |
| 60 | Mỗi thay đổi gắn với một chỉ số | Chưa đạt | Chưa có số liệu sử dụng (tỉ lệ đặt thành công, thời gian nhận đơn) để đo hiệu quả thiết kế. |

## Việc còn lại, theo thứ tự ưu tiên

1. Đo lường (câu 60): ghi sự kiện đặt đơn thành công, thời gian quán nhận đơn, tỉ lệ bỏ giỏ để mỗi thay đổi có số liệu.
2. Giờ giao dự kiến (48, 49): máy chủ tính từ thời gian chuẩn bị và khoảng cách, hiện ở thẻ quán và trang đơn.
3. Banner nợ phí (43) và trang kết quả khi gửi hồ sơ mở quán (44).
4. Giữ nội dung form món và địa chỉ khi quay lại (13).
5. Thử VoiceOver, TalkBack và chữ 200 % trên máy thật (54, 55).
6. Lọc quán theo khoảng cách, phí giao, đang mở (27); trợ giúp trong ngữ cảnh cho các trường khó (38).
