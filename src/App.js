import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz/Quiz';
import { useState } from 'react';
let quiz = [
  {
    "question": "Giá trị BER (Bit Error Rate = Tỷ lệ bít lỗi/Tỷ lệ bít truyền) phản ánh đặc trưng nào sau đây của đường truyền? ",
    "ans": [
      " Tốc độ truyền tin tối đa ",
      " Thông lượng ",
      " Độ tin cậy ",
      " Độ suy hao tín hiệu ",
      " Độ trễ "
    ],
    "key": [
      " Độ tin cậy "

    ]
  },
  {
    "question": "Thông số RTT(Round Trip Time) trong quá trình truyền tin cho biết điều gì? ",
    "ans": [
      " Trễ hàng đợi trên các thiết bị chuyển tiếp ",
      " Thời gian chọn đường trên bộ định tuyến (router) ",
      " Trễ lan truyền tín hiệu trên đường truyền ",
      " Trễ 2 chiều giữa nút nguồn và nút đích "
    ],
    "key": [
      " Trễ lan truyền tín hiệu trên đường truyền "

    ]
  },
  {
    "question": "Giả sử đường đi từ nút A đến nút B qua 3 liên kết với băng thông lần lượt là 4Mbps, 1Mbps và 2 Mbps. Thời gian để A truyền đến B một file có kích thước 10 MB là bao nhiêu. Giả sử các kết nối không truyền dữ liệu nào khác, trễ lan truyền và trễ tại các nút trung gian là không đáng kể? ",
    "ans": [
      " 80 s ",
      " 20 s ",
      " 40 s ",
      " 140 s ",
      " Xấp xỉ"
    ],
    "key": [
      " 80 s "

    ]
  },
  {
    "question": "Đặc điểm của cơ chế truyền “best-effort” là gì? ",
    "ans": [
      " Chỉ gửi dữ liệu 1 lần, không phát lại ",
      " Thiết lập liên kết trước khi truyền ",
      " Sử dụng báo nhận"
    ],
    "key": [
      " Chỉ gửi dữ liệu 1 lần, không phát lại "
    ]

  },
  {
    "question": "Tại sao đường truyền phải có giá trị MTU(Maximum Transmission Unit) để giới hạn kích thước của gói tin được truyền? ",
    "ans": [
      " Giảm xác suất đụng độ ",
      " Giảm tỉ lệ lỗi bit (BER – Bit Error Rate) ",
      " Giảm xác suất phải truyền lại dữ liệu ",
      " Tăng tốc độ truyền tin "
    ],
    "key": [
      " Giảm xác suất phải truyền lại dữ liệu "

    ]
  },
  {
    "question": "Tại sao phải đặt giá trị MTU (Maximum Transmission Unit) cho đường truyền? ",
    "ans": [
      " Giảm tỉ lệ phải truyền lại do lỗi bit trên gói tin  ",
      " Giảm trễ hàng đợi ",
      " Tăng hiệu suất sử dụng đường truyền ",
      " Tránh tắc nghẽn"
    ],
    "key": [
      " Giảm tỉ lệ phải truyền lại do lỗi bit trên gói tin  "

    ]
  },
  {
    "question": "Thông số nào sau đây được sử dụng để đánh giá độ tin cậy của đường truyền? ",
    "ans": [
      " Băng thông ",
      " Độ trễ ",
      " Độ suy hao ",
      " Tỉ lệ lỗi bit (BER) ",
      " Tỉ lệ mất gói tin"
    ],
    "key": [
      " Tỉ lệ lỗi bit (BER) ",
      " Tỉ lệ mất gói tin"

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về giao thức truyền thông? ",
    "ans": [
      " Quy định khuôn dạng dữ liệu khi truyền ",
      " Quy định cách thức xử lý dữ liệu ở mỗi bên ",
      " Quy định thứ tự các thông điệp khi truyền ",
      " Độc lập với các giao thức khác"
    ],
    "key": [
      " Độc lập với các giao thức khác"

    ]
  },
  {
    "question": "Mô tả nào sau đây là đúng về kiến trúc phân tầng trong hệ thống truyền thông?",
    "ans": [
      " Thứ tự các tầng có thể thay đổi linh hoạt khi triển khai ",
      " Tầng trên quyết định cách thức cung cấp dịch vụ của tầng dưới ",
      " Tầng dưới cung cấp dịch vụ cho tầng trên qua điểm truy cập dịch vụ (SAP) ",
      " Một số tầng không cần triển khai trên tất cả các nút mạng ",
      " Giao thức của mỗi tầng độc lập với nhau"
    ],
    "key": [
      " Một số tầng không cần triển khai trên tất cả các nút mạng ",
      " Tầng dưới cung cấp dịch vụ cho tầng trên qua điểm truy cập dịch vụ (SAP) "

    ]
  },
  {
    "question": "Trong kiến trúc phân tầng của hệ thống truyền thông, phát biểu nào sau đây là đúng? ",
    "ans": [
      " Tại mỗi tầng, hai bên tham gia quá trình truyền tin phải sử dụng giao thức giống nhau ",
      " Quá trình đóng gói dữ liệu tại bên gửi được thực hiện từ tầng trên xuống tầng dưới ",
      " Mỗi mô hình phân tầng chọn một giao thức mạng để điều khiển hoạt động tất cả các tầng ",
      " Hoạt động của mỗi tầng không phụ thuộc vào các tầng khác"
    ],
    "key": [
      " Tại mỗi tầng, hai bên tham gia quá trình truyền tin phải sử dụng giao thức giống nhau ",
      " Quá trình đóng gói dữ liệu tại bên gửi được thực hiện từ tầng trên xuống tầng dưới "

    ]
  },
  {
    "question": "Khái niệm PDU trong kiến trúc phân tầng là gì? ",
    "ans": [
      " Một giao thức truyền thông ",
      " Một tầng trong mô hình OSI ",
      " Đơn vị dữ liệu được đóng gói theo giao thức của mỗi tầng trong kiến trúc phân tầng ",
      " Điểm truy cập dịch vụ của mỗi tầng cung cấp cho tầng trên"
    ],
    "key": [
      " Đơn vị dữ liệu được đóng gói theo giao thức của mỗi tầng trong kiến trúc phân tầng "

    ]
  },
  {
    "question": "Trong kiến trúc phân tầng, khi nhận được dữ liệu từ tầng cao hơn chuyển xuống, tầng dưới xử lý như thế nào? ",
    "ans": [
      " Sửa thông tin phần tiêu đề ",
      " Loại bỏ phần tiêu đề của gói tin ",
      " Thêm tiêu đề cho gói tin ",
      " Thay thế tiêu đề của gói tin bằng tiêu đề mới"
    ],
    "key": [
      " Thêm tiêu đề cho gói tin "

    ]
  },
  {
    "question": "Đóng gói dữ liệu(encapsuation) trong kiến trúc phân tầng được thực hiện như thế nào? ",
    "ans": [
      " Thay thế tiêu đề của gói tin tầng trên bằng tiêu đề mới ",
      " Thêm phần tiêu đề mới vào gói tin nhận được ở tầng trên ",
      " Nén phần dữ liệu trong gói tin nhận được từ tầng trên ",
      " Chỉ thực hiện thêm phần tiêu đề ở tầng dưới cùng"
    ],
    "key": [
      " Thêm phần tiêu đề mới vào gói tin nhận được ở tầng trên "

    ]
  },
  {
    "question": "Tính trong suốt trong kiến trúc phân tầng thể hiện như thế nào? ",
    "ans": [
      " Tầng trên sử dụng dịch vụ của tầng dưới qua điểm truy cập dịch vụ (SAP) mà không cần quan tâm cách thức tầng dưới thực hiện ",
      " Mỗi tầng cung cấp nhiều dịch vụ khác nhau ",
      " Dữ liệu được đóng gói theo giao thức điều khiển ",
      " Chức năng trên mỗi tầng là khác nhau ",
      " Hai tầng trên liên kết phải sử dụng giao thức giống nhau"
    ],
    "key": [
      " Tầng trên sử dụng dịch vụ của tầng dưới qua điểm truy cập dịch vụ (SAP) mà không cần quan tâm cách thức tầng dưới thực hiện "

    ]
  },
  {
    "question": "Trong mô hình TCP/IP, tầng nào thực hiện chức năng điều khiển truyền dữ liệu trên liên kết vật lý? ",
    "ans": [
      " Tầng vật lý ",
      " Tầng liên kết dữ liệu ",
      " Tầng mạng ",
      " Tầng giao vận"
    ],
    "key": [
      " Tầng liên kết dữ liệu "

    ]
  },
  {
    "question": "Trong quá trình truyền dữ liệu, chức năng của tầng nào trong mô hình TCP/IP chỉ thực hiện trên các hệ thống đầu cuối?",
    "ans": [
      " Tầng ứng dụng ",
      " Tầng giao vận ",
      " Tầng mạng ",
      " Tầng liên kết dữ liệu ",
      " Tầng vật lý"
    ],
    "key": [
      " Tầng ứng dụng ",
      " Tầng giao vận "

    ]
  },
  {
    "question": "Tầng ứng dụng của mô hình TCP/IP đảm nhận chức năng những tầng nào khi tham chiếu tới mô hình OSI? ",
    "ans": [
      " Tầng dụng, tầng phiên ",
      " Tầng ứng dụng, tầng trình diễn  ",
      " Tầng ứng dụng, tầng phiên, tầng trình diễn ",
      " Tầng ứng dụng, tầng giao vận, tầng mạng"
    ],
    "key": [
      " Tầng ứng dụng, tầng phiên, tầng trình diễn "

    ]
  },
  {
    "question": "Chức năng của tầng nào dưới đây chỉ thực hiện trên các nút mạng đầu cuối? ",
    "ans": [
      " Tầng giao vận ",
      " Tầng mạng ",
      " Tầng liên kết dữ liệu ",
      " Tầng vật lý"
    ],
    "key": [
      " Tầng giao vận "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI? ",
    "ans": [
      " Mạng chuyển mạch kênh cung cấp dịch vụ theo mô hình hướng kết nối (connection-oriented) ",
      " Trong mạng chuyển mạch gói, dữ liệu của các liên kết khác nhau được truyền trên cùng một đường truyền vật lý ",
      " Chuyển tiếp dữ liệu trên mạng chuyển mạch kênh chậm hơn trên mạng chuyển mạch gói ",
      " Khi chuyển tiếp dữ liệu trong mạng chuyển mạch gói, có thể thiết lập độ ưu tiên cho các gói tin khi xử lý hàng đợi ",
      " Trong chuyển mạch kênh, tài nguyên của mỗi cuộc hội thoại được xác định trong giai đoạn thiết lập kênh và không đổi trong suốt quá trình truyền dữ liệu"
    ],
    "key": [
      " Mạng chuyển mạch kênh cung cấp dịch vụ theo mô hình hướng kết nối (connection-oriented) ",
      " Chuyển tiếp dữ liệu trên mạng chuyển mạch kênh chậm hơn trên mạng chuyển mạch gói "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về chuyển mạch kênh? ",
    "ans": [
      " Tài nguyên của mỗi kênh là như nhau với mọi liên kết, không phụ thuộc vào yêu cầu chất lượng dịch vụ. ",
      " Trong mạng chuyển mạch kênh, do trước khi truyền dữ liệu, kênh truyền đã được thiết lập nên các giao thức tầng trên luôn là giao thức hướng không kết nối (connectionless). ",
      " Tài nguyên của mỗi kênh được xác định trong giai đoạn thiết lập kênh và không đổi trong suốt quá trình truyền dữ liệu",
      " Tài nguyên của mỗi kênh được xác định trong giai đoạn thiết lập kênh và không đổi trong suốt quá trình truyền dữ liệu",
      " Để tăng độ tin cậy khi truyền tải dữ liệu, một kênh làm việc và một kênh dự phòng sẽ được thiết lập cho mỗi liên kế",
      " Kênh sẽ được giải phóng khi một trong hai bên bất kỳ ngắt liên kế"
    ],
    "key": [
      " Tài nguyên của mỗi kênh được xác định trong giai đoạn thiết lập kênh và không đổi trong suốt quá trình truyền dữ liệu",
      " Kênh sẽ được giải phóng khi một trong hai bên bất kỳ ngắt liên kế"

    ]
  },
  {
    "question": "Ưu điểm của kỹ thuật chuyển mạch gói so với chuyển mạch kênh là gì? ",
    "ans": [
      " Thời gian chuyển tiếp dữ liệu ngắn hơn ",
      " Hiệu suất sử dụng đường truyền cao hơn ",
      " Không xảy ra tắc nghẽn ",
      " Đảm bảo chất lượng dịch vụ ",
      " Không mất thời gian thiết lập kênh truyền"
    ],
    "key": [
      " Hiệu suất sử dụng đường truyền cao hơn ",
      " Không mất thời gian thiết lập kênh truyền"

    ]
  },
  {
    "question": "Những phát biểu nào là SAI về hoạt động của kỹ thuật chuyển mạch gói?",
    "ans": [
      " Gói tin của các liên kết khác nhau được truyền trên cùng một đường truyền vật lý",
      " Độ trễ trong mạng không phụ thuộc vào tải ",
      " Trên cùng một liên kết vật lý, tất cả các gói tin đều được truyền với tốc độ như nhau",
      " Các gói tin tới cùng một đích luôn được truyền theo cùng tuyến đường đi ",
      " Cho phép thiết lập độ ưu tiên cho các gói tin khi xử lý hàng đợi"
    ],
    "key": [
      " Độ trễ trong mạng không phụ thuộc vào tải ",
      " Các gói tin tới cùng một đích luôn được truyền theo cùng tuyến đường đi "

    ]
  },

  {
    "question": "Giao thức nào sau đây không nằm cùng nhóm với các giao thức còn lại? ",
    "ans": [
      " HTTP ",
      " FTP ",
      " SMTP ",
      " TCP ",
      " ICMP"
    ],
    "key": [
      " FTP "

    ]
  },
  {
    "question": "Các giao thức nào sau đây sử dụng giao thức TCP của tầng giao vận?  ",
    "ans": [
      " DNS ",
      " DHCP ",
      " FTP ",
      " POP ",
      " IP ",
      " OSPF "
    ],
    "key": [
      " FTP ",
      " POP "

    ]
  },
  {
    "question": "Một người dùng trong mạng LAN sử dụng dịch vụ Web để tải một file lên máy chủ. Theo mô hình TCP/IP, dữ liệu của người dùng có thể được đóng gói lần lượt bằng các giao thức nào? ",
    "ans": [
      " FTP, UDP, IP, Ethernet ",
      " HTTP, UDP, IP, Ethernet  ",
      " HTTP, TCP, IP, Ethernet ",
      " Ethernet, IP, TCP, HTTP ",
      " Ethernet, IP, TCP, FTP "
    ],
    "key": [
      " HTTP, TCP, IP, Ethernet "

    ]
  },
  {
    "question": "Đâu là một thứ tự sử dụng các giao thức đóng gói dữ liệu trong mạng TCP/IP? ",
    "ans": [
      " HTTP, TCP, Ethernet, IP ",
      " Ethernet, IP, TCP, FTP ",
      " SMTP, UDP, IP, Ethernet ",
      " DNS, UDP, IP, Ethernet "
    ]
    , "key": [
      " DNS, UDP, IP, Ethernet "

    ]
  },
  {
    "question": "Những giao thức tầng ứng dụng nào sau đây là cần thiết khi một người dùng sử dụng web mail để gửi email từ địa chỉ user@gmail.com tới user@yahoo.com ? ",
    "ans": [
      " SMTP ",
      " POP ",
      " IMAP ",
      " DNS ",
      " HTTP ",
      " HTTP ",
      " TCP "
    ]
    , "key": [
      " HTTP ",
      " DNS ",
      " SMTP "

    ]
  },

  {
    "question": "Phát biểu nào sau đây là SAI về hệ thống tên miền DNS? ",
    "ans": [
      " Không gian tên miền có kiến trúc phân cấp ",
      " Tìm kiếm thông tin tên miền được bắt đầu từ tên miền cấp 1 ",
      " Trong cơ chế phân giải đệ quy, máy chủ tên miền luôn chuyển truy vấn cho máy chủ gốc ",
      " Trong cơ chế phân giải tương tác, máy chủ tên miền luôn trả lại thông tin tên miền được truy vấn   "
    ]
    , "key": [
      " Trong cơ chế phân giải tương tác, máy chủ tên miền luôn trả lại thông tin tên miền được truy vấn   "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về hệ thống DNS? ",
    "ans": [
      " Mỗi tên miền chỉ ánh xạ tới một địa chỉ IP ",
      " Mỗi địa chỉ IP có thể ánh xạ tới nhiều tên miền ",
      " Hệ thống máy chủ tên miền gốc lưu trữ thông tin của toàn bộ tên miền trên Internet ",
      " Quá trình tìm kiếm thông tin tên miền được thực hiện từ gốc tới các nút nhánh  ",
      " Phân giải đệ quy được sử dụng thay cho phân giải tương tác vì nó tin cậy hơn "
    ]
    , "key": [
      " Quá trình tìm kiếm thông tin tên miền được thực hiện từ gốc tới các nút nhánh  ",
      " Mỗi địa chỉ IP có thể ánh xạ tới nhiều tên miền "

    ]
  },
  {
    "question": "Giao thức nào cho phép client lấy đồng thời tiêu đề và thân email từ server? ",
    "ans": [
      " HTTP ",
      " SMTP ",
      " POP ",
      " IMAP "
    ]
    , "key": [
      " POP "

    ]
  },
  {
    "question": "Giả sử một máy chủ Web được chuyển đổi kết nối sang một mạng khác, những thao tác nào sau đây cần thực hiện để người dùng vẫn truy cập được qua tên miền cũ?",
    "ans": [
      " Gán địa chỉ IP cho máy chủ theo địa chỉ mạng mới ",
      " Cấu hình lại giao thức định tuyến trên bộ định tuyến ",
      " Thay đổi ánh xạ tên miền sang địa chỉ IP mới ",
      " Cấu hình lại máy chủ DHCP "
    ]
    , "key": [
      " Gán địa chỉ IP cho máy chủ theo địa chỉ mạng mới ",
      " Thay đổi ánh xạ tên miền sang địa chỉ IP mới "


    ]
  },
  {
    "question": "Phương thức nào được sử dụng trong thông điệp HTTP Request để yêu cầu một tài nguyên?  ",
    "ans": [
      " GET ",
      " POST ",
      " PUT ",
      " HEAD "
    ]
    , "key": [
      " GET ",
      " POST "

    ]
  },
  {
    "question": "Có tối thiểu bao nhiêu thông điệp HTTP Request được phát đi khi người dùng truy cập vào một trang web chứa 20 bức ảnh? ",
    "ans": [
      " 1 ",
      " 2 ",
      " 20 ",
      " 21 "
    ]
    , "key": [
      " 21 "

    ]
  },
  {
    "question": "Một trang web có một đoạn văn vản và 10 ảnh minh họa. File mã nguồn　HTML và các file ảnh nằm trên 2 máy chủ Web khác nhau. Khi người dùng truy cập vào trang web này, có bao nhiêu kết nối TCP được thiết lập nếu giao thức được sử dụng là HTTP 1.1? ",
    "ans": [
      " 10 ",
      " 11 ",
      " 1 ",
      " 2 ",
      " Không xác định "
    ]
    , "key": [
      " 2 "

    ]
  },

  {
    "question": "Có bao nhiêu thông điệp được trao đổi giữa trình duyệt và máy chủ Web nếu người dùng truy cập vào một trang Web có vài đoạn văn bản và 4 bức ảnh?  ",
    "ans": [
      " 1 HTTP Request, 1 HTTP Response ",
      " 1 HTTP Request, 5 HTTP Response ",
      " 5 HTTP Request, 5 HTTP Response ",
      " 5 HTTP Request, 1 HTTP Response ",
      " Không xác định "
    ]
    , "key": [
      " 5 HTTP Request, 5 HTTP Response "

    ]
  },
  {
    "question": "Giao thức FTP sử dụng số hiệu cổng ứng dụng nào?",
    "ans": [
      " 20 ",
      " 21 ",
      " 22 ",
      " 25 ",
      " 53 "
    ]
    , "key": [
      " 20 ",
      " 21 "
    ]
  },
  {
    "question": "Hai kết nối giữa client và server trong dịch vụ FTP được sử dụng như thế nào? ",
    "ans": [
      " Một kết nối hoạt động, một kết nối để dự phòng ",
      " Cả 2 kết nối cùng tải tệp tin lên(upload), hoặc cùng tải xuống (download) ",
      " Một kết nối tải tệp tin lên (upload), kết nối còn lại để tải xuống (download) ",
      " Một kết nối để truyền dữ liệu của tệp tin, một kết nối để truyền thông điệp điều khiển"
    ]
    , "key": [
      " Một kết nối để truyền dữ liệu của tệp tin, một kết nối để truyền thông điệp điều khiển"

    ]
  },
  {
    "question": "Tại bên nhận, dựa vào thông tin nào dữ liệu được chuyển tới đúng tiến trình trên tầng ứng dụng để xử lý? ",
    "ans": [
      " Số hiệu cổng ứng dụng nguồn ",
      " Số hiệu cổng ứng dụng đích ",
      " Địa chỉ IP đích ",
      " Giao thức tại tầng giao vận Tầng giao vận - UDP"
    ]
    , "key": [
      " Số hiệu cổng ứng dụng đích "

    ]
  },
  {
    "question": "Giả sử từ trên nút mạng A có hai tiến trình trao đổi dữ liệu với một tiến trình trên nút mạng B, điều khiển bởi giao thức UDP. Phát biểu nào sau đây là đúng?",
    "ans": [
      " Hai tiến trình trên nút mạng A sử dụng chung một socket để trao đổi dữ liệu với tiến trinh trên nút B ",
      " Nút B sử dụng hai socket khác nhau để trao đổi dữ liệu với hai tiến trình của nút A ",
      " Các gói tin gửi từ nút A tới tiến trình trên nút B có cùng số hiệu cổng đích ",
      " Các gói tin gửi từ nút B tới hai tiến trình trên nút A có cùng số hiệu cổng đích ",
      " Hai tiến trình trên nút A đều có thể gửi dữ liệu liên tục với tốc độ cao nhất có thể "
    ]
    , "key": [
      " Các gói tin gửi từ nút A tới tiến trình trên nút B có cùng số hiệu cổng đích ",
      " Hai tiến trình trên nút A đều có thể gửi dữ liệu liên tục với tốc độ cao nhất có thể "

    ]
  },
  {
    "question": "Giao thức UDP nên được sử dụng khi xây dựng các ứng dụng mạng nào dưới đây? (chọn 2 đáp án) ",
    "ans": [
      " Truyền dữ liệu từ các trạm quan trắc môi trường về trung tâm dữ liệu ",
      " Điều khiển máy tính từ xa ",
      " Kiểm tra trạng thái hoạt động giữa các nút mạng ",
      " Truyền dữ liệu video trong hội nghị trực tuyến  ",
      " Sao lưu, đồng bộ dữ liệu "
    ]
    , "key": [
      " Kiểm tra trạng thái hoạt động giữa các nút mạng ",
      " Truyền dữ liệu video trong hội nghị trực tuyến  "
    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về giao thức UDP?",
    "ans": [
      " Là một giao thức thuộc tầng giao vận ",
      " Truyền dữ liệu theo datagram ",
      " Cung cấp các cơ chế truyền thông tin cậy ",
      " Sử dụng time-out riêng cho mỗi datagram gửi đi ",
      " Gửi liên tục các datagram mà không cần chờ báo nhận "
    ]
    , "key": [
      " Là một giao thức thuộc tầng giao vận ",
      " Gửi liên tục các datagram mà không cần chờ báo nhận ",
      " Truyền dữ liệu theo datagram "

    ]
  },
  {
    "question": "Điều gì chứng tỏ UDP là một giao thức không tin cậy? ",
    "ans": [
      " Không thiết lập liên kết trước khi truyền ",
      " Không sử dụng báo nhận ",
      " Không kiểm tra lỗi trên gói tin ",
      " Không kiểm soát lượng dữ liệu gửi đi làm quá tải bên nhận "
    ]
    , "key": [
      " Không sử dụng báo nhận "

    ]
  },
  {
    "question": "Tại phía gửi, giao thức UDP thực hiện những thao tác xử lý nào? ",
    "ans": [
      " Chia dữ liệu nhận được từ tầng ứng dụng vào các gói tin ",
      " Thiết lập liên kết với phía nhận ",
      " Gửi lại nếu không nhận được báo nhận ",
      " Chuyển gói tin xuống tầng mạng ",
      " Đặt bộ đếm time-out cho mỗi gói tin gửi đi "
    ]
    , "key": [
      " Chia dữ liệu nhận được từ tầng ứng dụng vào các gói tin ",
      " Chuyển gói tin xuống tầng mạng "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức UDP, phía nhận không thực hiện thao nào dưới đây khi nhận được dữ liệu?(Chọn 2 đáp án) ",
    "ans": [
      " Kiểm tra lỗi trên gói tin ",
      " Báo nhận thành công ",
      " Loại bỏ các gói tin nhận được không theo đúng thứ tự ",
      " Chuyển dữ liệu cho tiến trình tầng ứng dụng dựa vào số hiệu cổng đích"
    ]
    , "key": [
      " Báo nhận thành công ",
      " Loại bỏ các gói tin nhận được không theo đúng thứ tự "
    ]
  },
  {
    "question": "Những mô tả nào là đúng về hoạt động của giao thức UDP tại nút nhận? (Chọn 2 đáp án) ",
    "ans": [
      " Nhận dữ liệu từ tầng ứng dụng, xử lý dữ liệu và chuyển xuống cho tầng mạng ",
      " Kiểm tra lỗi bit trên phần tiêu đề gói tin dựa vào mã checksum ",
      " Chuyển dữ liệu cho tiến trình trên tầng ứng dụng dựa vào số hiệu cổng ứng dụng đích ",
      " Gửi gói tin ACK cho nút nguồn để báo nhận thành công ",
      " Loại bỏ các gói tin nhận được không theo đúng thứ tự ",
      " Hủy liên kết sau khi đã nhận đủ dữ liệu"
    ]
    , "key": [
      " Kiểm tra lỗi bit trên phần tiêu đề gói tin dựa vào mã checksum ",
      " Chuyển dữ liệu cho tiến trình trên tầng ứng dụng dựa vào số hiệu cổng ứng dụng đích "
    ]
  },
  {
    "question": "Trong hoạt động của giao thức UDP, phía nhận xử lý như thế nào khi gói tin nhận được bị lỗi? ",
    "ans": [
      " Nếu giao thức tầng trên có chức năng sửa lỗi thì chuyển lên cho giao thức đó ",
      " Hủy gói tin  ",
      " Gửi lại cho phía gửi sửa lỗi ",
      " Báo nhận không thành công để phía gửi phát lại"
    ]
    , "key": [
      " Hủy gói tin  "

    ]
  },
  {
    "question": "Lợi thế của giao thức UDP so với TCP là gì? (Chọn 3 đáp án) ",
    "ans": [
      " Kích thước phần tiêu đề nhỏ hơn ",
      " Hoạt động đơn giản hơn ",
      " Nhanh hơn ",
      " Không phải phát lại dữ liệu"
    ]
    , "key": [
      " Kích thước phần tiêu đề nhỏ hơn ",
      " Hoạt động đơn giản hơn ",
      " Nhanh hơn "

    ]
  },
  {
    "question": "Ưu thế của giao thức TCP so với UDP là gì?(Chọn 3 đáp án) ",
    "ans": [
      " Nhanh hơn do truyền dữ liệu theo dòng byte ",
      " Tin cậy hơn ",
      " Không làm quá tải nút nhận ",
      " Có cơ chế kiểm soát tắc nghẽn"
    ]
    , "key": [
      " Tin cậy hơn ",
      " Không làm quá tải nút nhận ",
      " Có cơ chế kiểm soát tắc nghẽn"

    ]
  },
  {
    "question": "Những hoạt động nào sau đây cho thấy TCP là một giao thức truyền thông tin cậy?  (Chọn 3 đáp án) ",
    "ans": [
      " Sử dụng ACK báo nhận dữ liệu thành công ",
      " Sử dụng checksum để kiểm soát lỗi ",
      " Phát lại dữ liệu khi xảy ra time-out ",
      " Kiểm soát luồng, không làm quá tải phía nhận ",
      " Kiểm soát tắc nghẽn "
    ]
    , "key": [
      " Sử dụng ACK báo nhận dữ liệu thành công ",
      " Sử dụng checksum để kiểm soát lỗi ",
      " Phát lại dữ liệu khi xảy ra time-out "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức TCP, khi nào cần phát lại gói tin đã gửi đi?(Chọn 3 đáp án) ",
    "ans": [
      " Nhận được 3 gói tin báo nhận có ACK Number giống nhau ",
      " Xảy ra timeout ",
      " Phát hiện lỗi trên gói tin báo nhận ",
      " Giá trị ACK Number trên gói tin báo nhận không nằm trong cửa sổ trượt "
    ]
    , "key": [
      " Nhận được 3 gói tin báo nhận có ACK Number giống nhau ",
      " Xảy ra timeout ",
      " Phát hiện lỗi trên gói tin báo nhận "
    ]
  },
  {
    "question": "Giao thức TCP thực hiện báo nhận thành công như thế nào? (Chọn 2 đáp án) ",
    "ans": [
      " Thiết lập cờ ACK trên gói tin phản hồi ",
      " Thiết lập cờ SYN trên gói tin phản hồi ",
      " Tính toán ACK Number trên gói tin phản hồi để yêu cầu dữ liệu tiếp theo ",
      " Phản hồi lại gói tin đã nhận"
    ]
    , "key": [
      " Thiết lập cờ ACK trên gói tin phản hồi ",
      " Tính toán ACK Number trên gói tin phản hồi để yêu cầu dữ liệu tiếp theo "

    ]
  },
  {
    "question": "Giá trị Windows size trong phần tiêu đề của gói tin TCP được sử dụng như thế nào? ",
    "ans": [
      " Phát hiện lỗi trên gói tin ",
      " Xác định lượng dữ liệu tối đa bên gửi có thể gửi đi ",
      " Xác định lượng dữ liệu tối đa bên nhận có thể nhận ",
      " Thiết lập liên kết "
    ]
    , "key": [
      " Xác định lượng dữ liệu tối đa bên nhận có thể nhận "

    ]
  },
  {
    "question": "Nút mạng nhận được gói tin TCP có 32 bit đầu tiên là 1000 1000 0001 0001 0000 0000 0001 1001. Nếu dịch vụ trên nút mạng này đang sử dụng số hiệu cổng ứng dụng chuẩn, hãy cho biết giao thức điều khiển dịch vụ là gì? ",
    "ans": [
      " HTTP ",
      " HTTPS ",
      " SMTP ",
      " POP ",
      " FTP "
    ]
    , "key": [
      " SMTP "

    ]
  },
  {
    "question": "Giá trị checksum trong phần tiêu đề của gói tin TCP được sử dụng như thế nào? ",
    "ans": [
      " Phát hiện lỗi trên gói tin ",
      " Xác định lượng dữ liệu tối đa bên nhận có thể nhận ",
      " Thiết lập liên kết ",
      " Sửa lỗi trên gói tin"
    ]
    , "key": [
      " Phát hiện lỗi trên gói tin "

    ]
  },
  {
    "question": "Mã phát hiện lỗi nào sau đây được sử dụng để kiểm tra lỗi trên phần tiêu đề của gói tin TCP? ",
    "ans": [
      " Mã parity ",
      " Mã checksum 16 bit ",
      " Mã checksum 32 bit ",
      " Mã CRC 16 bit ",
      " Mã CRC 32 bit "
    ]
    , "key": [
      " Mã checksum 16 bit "
    ]
  },
  {
    "question": "Khi nào một bên trong quá trình truyền tin điều khiển bằng TCP gửi gói tin có cờ FIN được thiết lập? ",
    "ans": [
      " Yêu cầu thiết lập liên kết ",
      " Đồng ý thiết lập liên kết ",
      " Báo kết thúc gửi dữ liệu ",
      " Báo kết thúc nhận dữ liệu"
    ]
    , "key": [
      " Báo kết thúc gửi dữ liệu "

    ]
  },
  {
    "question": "Giả sử từ mỗi host A và B có một tiến trình trao đổi dữ liệu với một tiến trình host C, điều khiển bởi giao thức TCP. Phát biểu nào sau đây là đúng? ",
    "ans": [
      " Host A và B không thể kết nối tới cùng một cổng trên host C ",
      " Socket trên host A và B phải sử dụng số hiệu cổng khác nhau ",
      " Nếu phát hiện tắc nghẽn xảy ra trên liên kết với host A thì host C khởi động giai đoạn Slow Start trên cả 2 liên kết ",
      " Host C sử dụng các socket khác nhau để tạo liên kết với host A và B ",
      " Host C sử dụng giá trị cửa số nhận giống nhau cho cả hai liên kết với A và B "
    ]
    , "key": [
      " Host C sử dụng các socket khác nhau để tạo liên kết với host A và B "

    ]
  },
  {
    "question": "Giả sử trên một nút mạng, P1 và P2 là hai tiến trình sử dụng giao thức TCP để trao đổi dữ liệu với tiến trình P3 trên nút mạng khác. Phát biểu nào sau đây là đúng? ",
    "ans": [
      " P1 và P2 phải sử dụng số hiệu cổng ứng dụng giống nhau ",
      " P1 và P2 không thể đồng thời gửi dữ liệu cho P3 ",
      " Khi P1 ngắt liên kết, P2 vẫn trao đổi dữ liệu một cách bình thường với P3 ",
      " P1 và P2 sử dụng cửa sổ kiểm soát tắc nghẽn giống nhau"
    ]
    , "key": [
      " Khi P1 ngắt liên kết, P2 vẫn trao đổi dữ liệu một cách bình thường với P3 "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức TCP, phía nhận thực hiện thao tác xử lý nào nếu nhận được một gói tin khi bộ đệm đã đầy? (Chọn 2 đáp án) ",
    "ans": [
      " Xóa bộ đệm ",
      " Loại bỏ gói tin ",
      " Gửi lại ACK xác nhận các trước đó với giá trị Receive Window = 0 ",
      " Gửi ACK xác nhận gói tin vừa nhận được với giá trị Receive Window = 0 ",
      " Gửi gói tin ACK bất kỳ với giá trị Receive Window bằng kích thước dữ liệu trong bộ đệm"
    ]
    , "key": [
      " Loại bỏ gói tin ",
      " Gửi lại ACK xác nhận các trước đó với giá trị Receive Window = 0 "

    ]
  },
  {
    "question": "Nếu gói tin số 2 bị mất thì tổng số gói tin phía gửi đã gửi đi là bao nhiêu sau khi kết thúc quá trình truyền tin? ",
    "ans": [
      " 4 ",
      " 5 ",
      " 6 ",
      " 7 ",
      " 8"
    ]
    , "key": [
      " 8"

    ]
  },
  {
    "question": "Tạo sao sử dụng cơ chế “hồi phục nhanh” trong quá trình kiểm soát tắc ngẽn làm tăng hiệu năng của giao thức TCP? ",
    "ans": [
      " Phía gửi phát hiện sớm tắc nghẽn ",
      " Phía nhận sẽ nhận được các gói tin còn thiếu một cách sớm nhất ",
      " Cho phép lượng dữ liệu gửi đi lớn hơn giá trị cửa sổ nhận của phía nhận ",
      " Cho phép gửi dữ liệu ngay mà không cần chờ báo nhận ",
      " Phía gửi không cần chuyển sang giai đoạn tránh tắc nghẽn"
    ]
    , "key": [
      " Phía gửi phát hiện sớm tắc nghẽn "

    ]
  },
  {
    "question": "Quá trình điều khiển tắc nghẽn trong giao thức TCP không thực hiện thao tác nào? ",
    "ans": [
      " Giảm kích thước cửa sổ kiểm soát tắc nghẽn khi có timeout ",
      " Khởi tạo cửa sổ kiểm soát tắc nghẽn là 1 MSS (Maximum Segment Size) ",
      " Giữ nguyên kích thước cửa sổ kiểm soát tắc nghẽn khi vượt qua giá trị ngưỡng của giai đoạn Slow Start ",
      " Giảm giá trị ngưỡng của giai đoạn Slow Start khi có timeout "
    ]
    , "key": [
      " Giữ nguyên kích thước cửa sổ kiểm soát tắc nghẽn khi vượt qua giá trị ngưỡng của giai đoạn Slow Start "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là sai trong quá trình điều khiển tắc nghẽn của giao thức TCP?(Chọn 2 đáp án) ",
    "ans": [
      " Tăng gấp đôi kích thước cửa sổ kiểm soát tắc nghẽn khi gửi thành công trong giai đoạn Slow Start ",
      " Không tăng kích thước cửa sổ kiểm soát tắc ngẽn trong giai đoạn tránh tắc nghẽn ",
      " Bắt đầu lại giai đoạn tránh tắc nghẽn khi có time-out ",
      " Khi bắt đầu giai đoạn Slow Start, kích thước cửa số kiểm soát tắc nghẽn là 1MSS (Maximum Segment Size)           Giả sử trong một khoảng thời gian nào đó quan sát quá trình truyền dữ liệu giữa hai ứng dụng được điều khiển bởi giao thức TCP, ta thu được đồ thị điều khiển tắc nghẽn như sau:"
    ]
    , "key": [
      " Không tăng kích thước cửa sổ kiểm soát tắc ngẽn trong giai đoạn tránh tắc nghẽn ",
      " Bắt đầu lại giai đoạn tránh tắc nghẽn khi có time-out "

    ]
  },
  {
    "question": "Giai đoạn Slow Start bắt đầu tại những lượt gửi nào? ",
    "link": "1.png",
    "ans": [
      " 10 và 14 ",
      " 14 và 19 ",
      " 10 và 23 ",
      " 19 và 23"
    ]
    , "key": [
      " 10 và 23 "

    ]
  },
  {
    "question": "Đoạn nào biểu diễn giai đoạn tránh tắc nghẽn? ",
    "link": "1.png",
    "ans": [
      " 6-14 ",
      " 6-10 và 14-18 ",
      " 6-9, 14-18 và 19-22 ",
      " 19-22"
    ]
    , "key": [
      " 6-9, 14-18 và 19-22 "

    ]
  },
  {
    "question": "Tại lượt gửi nào, phía gửi xảy ra time-out? ",
    "link": "1.png",
    "ans": [
      " 9 ",
      " 14 ",
      " 18 ",
      " 22"
    ]
    , "key": [
      " 9 ",
      " 22"

    ]
  },
  {
    "question": "Trong quá trình truyền tin được điều khiển bởi giao thức TCP, tiến trình đích nhận được gói tin có trường Sequence Number = 5600 trong phần tiêu đề, dữ liệu có kích thước 1400 byte. Nếu phát hiện có lỗi trên phần tiêu đề qua việc kiểm tra trường checksum, tiến trình đích sẽ thực hiện các bước xử lý như thế nào? (Chọn 2 đáp án) ",
    "ans": [
      " Sửa lỗi bit tìm thấy trên phần tiêu đề ",
      " Hủy gói tin bị lỗi ",
      " Gửi báo nhận với ACK Number = 5600 cho bên nhận ",
      " Hủy tất cả các gói tin đã nhận trước đó ",
      " Tách phần dữ liệu và chuyển cho tầng ứng dụng "
    ]
    , "key": [
      " Hủy gói tin bị lỗi ",
      " Gửi báo nhận với ACK Number = 5600 cho bên nhận "

    ]
  },
  {
    "question": "Trong quá trình truyền tin được điều khiển bởi giao thức TCP, tiến trình nguồn không nhận được báo nhận khi đã hết thời gian time-out. Giả sử giá trị cửa số kiểm soát tắc nghẽn là 5600 byte, và 1 MSS = 1400 byte, tiến trình này gửi đi liên tiếp tối đa bao nhiêu byte? ",
    "ans": [
      " 0 ",
      " 1400 ",
      " 4200 ",
      " 5600 ",
      " 7000 "
    ]
    , "key": [
      " 1400 "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức TCP, tiến trình nguồn đang sử dụng cửa sổ kiểm soát tắc nghẽn là 8400 byte thì nhận được 3 gói tin báo nhận có ACK giống nhau (có trường Receive windows trong tiêu đề là 65000). Giả sử giá trị MSS = 1400 byte. Hãy cho biết tiến trình nguồn có thể gửi liên tiếp tối đa bao nhiêu byte? ",
    "ans": [
      " 1400 byte ",
      " 65000 byte ",
      " 4200 byte ",
      " 2800 byte ",
      " 7000 byte "
    ]
    , "key": [
      " 4200 byte "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức TCP, khi xảy ra time-out, phía gửi thực hiện những thao tác xử lý nào?(Chọn 2 đáp án) ",
    "ans": [
      " Tính toán lại giá trị cửa sổ kiểm soát tắc nghẽn ",
      " Tính toán lại giá trị cửa sổ kiểm soát luồng ",
      " Phát lại dữ liệu đã gửi mà chưa nhận được ACK  ",
      " Chờ thêm một khoảng thời gian tối thiểu 2 lần RTT trung bình trước khi phát lại dữ liệu ",
      " Đóng liên kết hiện tại và thiết lập liên kết mới "
    ]
    , "key": [
      " Tính toán lại giá trị cửa sổ kiểm soát tắc nghẽn ",
      " Phát lại dữ liệu đã gửi mà chưa nhận được ACK  "

    ]
  },
  {
    "question": "Trong hoạt động của giao thức TCP, phía nhận thực hiện thao tác xử lý nào nếu nhận được một gói tin khi bộ đệm đã đầy?(Chọn 2 đáp án) =69 ",
    "ans": [
      " Xóa bộ đệm ",
      " Loại bỏ gói tin ",
      " Gửi lại ACK trước đó với giá trị Receive Window = 0 ",
      " Gửi ACK cho gói tin vừa nhận được với giá trị Receive Window = 0 "
    ]
    , "key": [
      " Loại bỏ gói tin ",
      " Gửi lại ACK trước đó với giá trị Receive Window = 0 "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về địa chỉ IP 116.12.34.113 /28? ",
    "ans": [
      " Là một địa chỉ phân lớp A ",
      " Phần địa chỉ máy trạm (Host ID) có 28 bit ",
      " Có thể gán cho một nút mạng ",
      " Chỉ dùng trong mạng LAN ",
      " Nằm trong mạng có địa chỉ 116.12.34.128 /28"
    ]
    , "key": [
      " Là một địa chỉ phân lớp A ",
      " Có thể gán cho một nút mạng "

    ]
  },
  {
    "question": "Sử dụng mặt nạ 255.255.252.0 để chia mạng 160.12.64.0 /19 thành các mạng con. Số mạng con thành lập được là bao nhiêu? ",
    "ans": [
      " 22 ",
      " 19 ",
      " 3 ",
      " 8 ",
      " 6 "
    ]
    , "key": [
      " 8 "
    ]
  },
  {
    "question": "Sử dụng mặt nạ 255.255.252.0 để chia mạng 160.12.64.0 /19 thành các mạng con. Mỗi mạng con có thể cấp pháp được tối đa bao nhiêu địa chỉ máy trạm? ",
    "ans": [
      " 3 ",
      " 8 ",
      " 22 ",
      " 1022 ",
      " 1024 "
    ]
    , "key": [
      " 1022 "
    ]
  },
  {
    "question": "Sử dụng mặt nạ 255.255.252.0 để chia mạng 160.12.64.0 /19 thành các mạng con. Địa chỉ nào sau đây không phải là một địa chỉ mạng con có được từ cách chia trên?(Chọn 2 đáp án) ",
    "ans": [
      "160.12.68.0 /22  ",
      "160.12.70.0 /22 ",
      "160.12.72.0 /22 ",
      "160.12.74.0 /22 ",
      "160.12.76.0 /22 "
    ]
    , "key": [
      "160.12.70.0 /22 ",
      "160.12.74.0 /22 "
    ]
  },
  {
    "question": "Các địa chỉ IP nào sau đây có cùng NetworkID (chọn 2 đáp án)? ",
    "ans": [
      "172.16.100.1 /20",
      "172.16.110.1 /20",
      "172.16.120.1 /20",
      "172.16.130.1 /21",
      "172.16.140.1 /21",
      "172.16.150.1 /21"
    ]
    , "key": [
      "172.16.100.1 /20",
      "172.16.110.1 /20"
    ]
  },
  {
    "question": "Những địa chỉ IP nào sau đây KHÔNG dùng trên mạng Internet?(Chọn 3 đáp án) ",
    "ans": [
      "127.0.0.1 /8",
      "169.254.1.1 /16",
      "192.168.1.1 /24",
      "12.34.56.78 /8",
      " 203.147.12.156 /24 ",
      "172.12.101.57 /16"
    ]
    , "key": [
      "127.0.0.1 /8",
      "169.254.1.1 /16",
      "192.168.1.1 /24"
    ]
  },
  {
    "question": "Địa chỉ 148.37.21.104 thuộc phân lớp nào? ",
    "ans": [
      " A ",
      " B ",
      " C ",
      " D ",
      " E "
    ]
    , "key": [
      " B "
    ]
  },
  {
    "question": "Địa chỉ IP nào sau đây gán được cho một nút mạng?  ",
    "ans": [
      "230.146.21.45 /28",
      "192.168.1.0 /24",
      "10.64.0.0 /12",
      "10.64.0.0 /10",
      "172.16.3.255 /21",
      "172.16.3.255 /22"
    ]
    , "key": [
      "172.16.3.255 /21"
    ]
  },
  {
    "question": "Sử dụng mặt nạ mạng nào sau đây để chia mạng 10.96.0.0 /10 thành 8 mạng con? ",
    "ans": [
      "255.0.0.0",
      "255.224.0.0",
      "255.240.0.0",
      "255.248.0.0",
      "255.252.0.0"
    ]
    , "key": [
      "255.248.0.0"
    ]
  },
  {
    "question": "Một mạng có địa chỉ phần mạng dài 23 bit. Nếu chia thành 4 mạng con thì số địa chỉ IP tối đa mỗi mạng con có thể gán cho máy trạm là bao nhiêu? ",
    "ans": [
      " 512 ",
      " 256 ",
      " 128 ",
      " 254 ",
      " 126 ",
      " 30 "
    ]
    , "key": [
      " 126 "
    ]
  },
  {
    "question": "Có bao nhiêu địa chỉ có thể sử dụng để gán cho các nút mạng trong mạng 204.16.156.32 /27? ",
    "ans": [
      " 32 ",
      " 30 ",
      " 27 ",
      " 5 "
    ]
    , "key": [
      " 30 "
    ]
  },
  {
    "question": "Địa chỉ IP nào sau đây là một địa chỉ multicast? ",
    "ans": [
      "127.0.0.1",
      "192.168.1.1",
      "8.8.8.8",
      "224.0.0.25"
    ]
    , "key": [
      "224.0.0.25"
    ]
  },
  {
    "question": "Gói tin IP có địa chỉ đích 67.125.90.13  sẽ được router chuyển tiếp tới mạng nào? ",
    "ans": [
      "67.125.64.0 /19",
      "67.125.0.0 /17",
      "67.125.96.0 /19",
      "67.125.128.0 /17"
    ]
    , "key": [
      "67.125.64.0 /19"
    ]
  },
  {
    "question": "Mặt nạ mạng nào sau đây có thể chia mạng 172.16.64.0 /18 thành 16 mạng con?",
    "ans": [
      "255.255.0.0",
      "255.255.192.0",
      "255.255.252.0",
      "255.255.255.0"

    ]
    , "key": [
      "255.255.252.0"
    ]
  },
  {
    "question": "Ý nghĩa của trường TTL(Time-to-live) trong tiêu đề gói tin IP là gì?   ",
    "ans": [
      " Gốc thời gian để đồng bộ giữa hai bên ",
      " Thời điểm gói tin được gửi đi ",
      " Số chặng tối đa gói tin có thể được chuyển tiếp qua ",
      " Số chặng mã gói tin đã đi qua trước khi tới đích ",
      " Thời gian tối đa gói tin có thể nằm trong hàng đợi"
    ]
    , "key": [
      " Số chặng tối đa gói tin có thể được chuyển tiếp qua "
    ]
  },
  {
    "question": "Trong hoạt động của giao thức IP, phía gửi không thực hiện thao tác nào dưới đây? ",
    "ans": [
      " Đặt dữ liệu nhận được từ tầng giao vận vào gói tin và thêm thông tin điều khiển ",
      " Thiết lập liên kết với phía nhận trước khi truyền đi ",
      " Chuyển gói tin cho tầng liên kết dữ liệu xử lý ",
      " Chờ báo nhận trước khi gửi gói tin tiếp theo "
    ]
    , "key": [
      " Thiết lập liên kết với phía nhận trước khi truyền đi ",
      " Chờ báo nhận trước khi gửi gói tin tiếp theo "
    ]
  },
  {
    "question": "Giao thức IP thực hiện những quá trình nào sau đây tại phía nhận?  ",
    "ans": [
      " Phát ACK báo nhận thành công ",
      " Kiểm tra checksum để phát hiện lỗi ",
      " Hợp mảnh các gói tin nếu cần ",
      " Thêm thông tin phần tiêu đề trước khi chuyển cho giao thức tầng trên ",
      " Xác định giao thức tầng trên nào sẽ xử lý tiếp dữ liệu "
    ]
    , "key": [
      " Kiểm tra checksum để phát hiện lỗi ",
      " Hợp mảnh các gói tin nếu cần ",
      " Xác định giao thức tầng trên nào sẽ xử lý tiếp dữ liệu "
    ]
  },
  {
    "question": "Giao thức IP không thực hiện thao tác nào tại phía nhận? ",
    "ans": [
      " Kiểm tra lỗi trên gói tin ",
      " Sửa lỗi nếu có lỗi ",
      " Phát báo nhận cho nút gửi ",
      " Hủy gói tin nếu TTL = 0 "
    ]
    , "key": [
      " Sửa lỗi nếu có lỗi ",
      " Phát báo nhận cho nút gửi "
    ]
  },
  {
    "question": "Nếu không tìm được cổng để chuyển tiếp gói tin IP đi, router xử lý như thế nào? ",
    "ans": [
      " Gửi gói tin ra tất cả các cổng ",
      " Thực hiện quá trình định tuyến để tìm đường đi cho gói tin này ",
      " Hủy gói tin và báo lỗi cho nút nguồn ",
      " Gửi lại gói tin cho nút nguồn "
    ]
    , "key": [
      " Hủy gói tin và báo lỗi cho nút nguồn "
    ]
  },
  {
    "question": "Router không thực hiện bước xử lý nào sau đây khi chuyển tiếp một gói tin IP?  ",
    "ans": [
      " Kiểm tra giá trị TTL của gói tin ",
      " Kiểm tra lỗi bit cho phần tiêu đề ",
      " Phân mảnh gói tin nếu kích thước lớn hơn giá trị MTU của đường truyền ",
      " Tìm kiếm lối ra dựa trên địa chỉ đích ",
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết ",
      " Giảm giá trị TTL của gói tin "
    ]
    , "key": [
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết "
    ]
  },
  {
    "question": "Bộ định tuyến không thực hiện thao tác nào khi chuyển tiếp (forwarding) gói tin IP?  (Chọn 3 đáp án) ",
    "ans": [
      " Thiết lập liên kết với nút kế tiếp ",
      " Quảng bá gói tin nếu không tìm thấy lối ra  ",
      " Giảm giá trị TTL (time-to-live) của gói tin ",
      " Phân mảnh gói tin nếu cần ",
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết "
    ]
    , "key": [
      " Thiết lập liên kết với nút kế tiếp ",
      " Quảng bá gói tin nếu không tìm thấy lối ra  ",
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết "
    ]
  },
  {
    "question": "Trong hoạt động chuyển tiếp gói tin IP trên router, lý do nào sau đây khiến gói tin bị loại bỏ? (Chọn 4 đáp án) ",
    "ans": [
      " Phát hiện lỗi thông qua trường checksum ",
      " Gói tin bị phân mảnh ",
      " Không tìm thấy cổng ra trên bảng chuyển tiếp ",
      " Hàng đợi trên router bị đầy ",
      " Giá trị TTL = 1 "
    ]
    , "key": [
      " Phát hiện lỗi thông qua trường checksum ",
      " Không tìm thấy cổng ra trên bảng chuyển tiếp ",
      " Hàng đợi trên router bị đầy ",
      " Giá trị TTL = 1 "
    ]
  },
  {
    "question": "Cơ chế nào được sử dụng để chuyển đổi địa chỉ IP khi chuyển tiếp gói tin IP giữa mạng cục bộ và mạng công cộng? ",
    "ans": [
      " DNS ",
      " DHCP ",
      " ARP ",
      " NAT "
    ]
    , "key": [
      " NAT "
    ]
  },
  {
    "question": "Khi nào cần phân mảnh gói tin IP trong quá trình truyền? ",
    "ans": [
      " Có tắc nghẽn xảy ra trên đường truyền ",
      " Kích thước gói tin lớn hơn MTU của đường truyền ",
      " Kích thước gói tin lớn hơn kích thước còn trống trên bộ đệm của nút nhận ",
      " Phát hiện lỗi trên gói tin"
    ]
    , "key": [
      " Kích thước gói tin lớn hơn MTU của đường truyền "
    ]
  },
  {
    "question": "Khi chuyển tiếp, gói tin IP bị phân mảnh trong trường hợp nào? ",
    "ans": [
      " Mạng có tắc nghẽn ",
      " Mạng có đụng độ ",
      " Kích thước gói tin lớn hơn MTU của đường truyền ",
      " Có nhiều lối ra phù hợp để đưa dữ liệu tới mạng đích ",
      " Kích thước vùng trống trong bộ đệm của nút kế tiếp không đủ để nhận gói tin"
    ]
    , "key": [
      " Kích thước gói tin lớn hơn MTU của đường truyền "
    ]
  },
  {
    "question": "Một gói tin IP có kích thước phần dữ liệu (payload) là 1200 byte bị phân thành 3 mảnh có giá trị Fragment Offset lần lượt là 0, 69, 138. Phần dữ liệu trong các mảnh này có kích thước lần lượt là bao nhiêu byte? ",
    "ans": [
      " 0, 69, 138 ",
      " 400, 400, 400 ",
      " 50, 50, 50 ",
      " 552, 552, 96 ",
      " 96, 552, 552 "
    ]
    , "key": [
      " 552, 552, 96 "
    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng đối với gói tin IP có địa chỉ đích là 255.255.255.255?",
    "ans": [
      " Được sử dụng để thiết lập liên kết ",
      " Được ưu tiên đưa vào hàng đợi của router khi chờ chuyển tiếp ",
      " Được chuyển tới mọi nút trong miền quảng bá ",
      " Được sử dụng để thông báo có đụng độ xảy ra trong mạng điểm-đa điểm ",
      " Được chuyển ngay ra ngoài mạng Internet mà không cần chuyển đổi địa chỉ "
    ]
    , "key": [
      " Được chuyển tới mọi nút trong miền quảng bá "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về định tuyến theo vec-tơ khoảng cách? ",
    "ans": [
      " Mỗi nút thu thập thông tin định tuyến từ tất cả các nút trong mạng ",
      " Cho phép tìm đường đi ngắn nhất giữa mọi cặp nút ",
      " Để tránh lỗi lặp vô hạn, các nút trao đổi toàn bộ vec-tơ khoảng cách với nhau ",
      " Chuyển tiếp các vec-tơ khoảng cách nhận được từ hàng xóm ra các cổng khác ",
      " Tốc độ hội tụ không phụ thuộc vào số liên kết giữa các nút "
    ]
    , "key": [
      " Cho phép tìm đường đi ngắn nhất giữa mọi cặp nút "

    ]
  },
  {
    "question": "Định tuyến theo vec-tơ khoảng cách hoạt động như thế nào? ",
    "ans": [
      " Trao đổi thông tin vec-tơ khoảng cách với các bộ định tuyến hàng xóm ",
      " Lan truyền thông tin vec-tơ khoảng cách nhận được tới các bộ định tuyến khác ",
      " Tính toán và cập nhật đường đi mới khi nhận được vec-tơ khoảng cách ",
      " Xây dựng sơ đồ mạng từ các vec-tơ khoảng cách nhận được"
    ]
    , "key": [
      " Trao đổi thông tin vec-tơ khoảng cách với các bộ định tuyến hàng xóm ",
      " Tính toán và cập nhật đường đi mới khi nhận được vec-tơ khoảng cách "

    ]
  },
  {
    "question": "Tốc độ hội tụ của định tuyến theo vector khoảng cách phụ thuộc vào các yếu tố nào ?",
    "ans": [
      " Số lượng nút định tuyến ",
      " Số kết nối giữa các nút định tuyến ",
      " Băng thông đường truyền ",
      " Độ trễ ",
      " Độ mất mát gói tin"
    ]
    , "key": [
      " Số lượng nút định tuyến ",
      " Số kết nối giữa các nút định tuyến "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về định tuyến theo trạng thái liên kết? ",
    "ans": [
      " Thông tin trạng thái liên kết được lan truyền cho tất cả các nút trong mạng ",
      " Sử dụng thuật toán Bellman-Ford để tìm đường đi ngắn nhất ",
      " Mỗi nút tự xây dựng hình trạng (topology) của mạng ",
      " Số lượng bản tin trao đổi tăng nhanh theo số liên kết trong mạng "
    ]
    , "key": [
      " Sử dụng thuật toán Bellman-Ford để tìm đường đi ngắn nhất ",
      " Số lượng bản tin trao đổi tăng nhanh theo số liên kết trong mạng "

    ]
  },
  {
    "question": "Giao thức định tuyến theo trạng thái liên kết không thực hiện hoạt động nào sau đây ? ",
    "ans": [
      " Quảng bá thông tin trạng thái liên kết trên mạng ",
      " Thu thập thông tin đường đi từ hàng xóm ",
      " Xây dựng topology của mạng  ",
      " Thực hiện thuật toán tìm đường đi ngắn nhất "
    ]
    , "key": [
      " Thu thập thông tin đường đi từ hàng xóm "

    ]
  },
  {
    "question": "Trong một mạng sử dụng định tuyến theo trạng thái liên kết, router A thu thập được các thông tin liên kết dạng (link, cost) sau: (BA, 8), (CA, 1), (BC, 1), (CB, 1), (BD, 15), (DB, 15). Những đường đi nào dưới đây là đường đi ngắn nhất?(Chọn 2 đáp án) ",
    "ans": [
      " AB ",
      " ACB ",
      " ABD ",
      " ACBD "
    ]
    , "key": [
      " ACB ",
      " ACBD "

    ]
  },
  {
    "question": "Giả sử A nhận được thông tin đường đi dạng (đích đến, chi phí) từ B là (C, 1) và (E, 5), từ C là (D, 8) và (E, 4), từ D là (E, 4) và (C, 8). Đường đi nào sau đây KHÔNG phải là đường đi mà A lựa chọn? ",
    "ans": [
      " (B, 3) ",
      " (C, 4) ",
      " (D, 3) ",
      " (E, 8) "
    ]
    , "key": [
      " (E, 8) "

    ]
  },
  {
    "question": "Giao thức định tuyến nào được sử dụng để tìm đường đi giữa các vùng tự trị (AS –  Autonomous System)? ",
    "ans": [
      " RIP ",
      " OSPF ",
      " IGRP ",
      " EIGRP ",
      " BGP"
    ]
    , "key": [
      " BGP"

    ]
  },
  {
    "question": "Giao thức nào sau đây không nằm cùng nhóm với các giao thức còn lại ? ",
    "ans": [
      " OSPF ",
      " RIP ",
      " IGRP ",
      " EIGRP ",
      " BGP "
    ]
    , "key": [
      " BGP "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về giao thức định tuyến OSPF? ",
    "ans": [
      " Thông tin trạng thái liên kết của một nút được lan truyền tới tất cả các nút trong miền ",
      " Có cơ chế định tuyến phân cấp ",
      " Sử dụng thuật toán Bellman-Ford để tìm đường đi ngắn nhất ",
      " Mỗi nút tự xây dựng hình trạng (topology) của toàn mạng ",
      " Tìm đường đi ngắn nhất từ một nút tới các nút khác "
    ]
    , "key": [
      " Sử dụng thuật toán Bellman-Ford để tìm đường đi ngắn nhất "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về giao thức OSPF? ",
    "ans": [
      " Là giao thức định tuyến theo vec-tơ khoảng cách ",
      " Được thực hiện trên các bộ định tuyến (router) ",
      " Là giao thức định tuyến nội vùng ",
      " Hỗ trợ định tuyến phân cấp"
    ]
    , "key": [
      " Là giao thức định tuyến theo vec-tơ khoảng cách "

    ]
  },
  {
    "question": "Giao thức định tuyến RIPv2 tính chi phí đường đi dựa trên thông số nào? ",
    "ans": [
      " Băng thông ",
      " Số chặng (hop) ",
      " Độ trễ ",
      " Tải"
    ]
    , "key": [
      " Số chặng (hop) "

    ]
  },
  {
    "question": "Giao thức định tuyến nào phù hợp để cài đặt cho các router trong vùng tự trị (AS) có 40 router ? ",
    "ans": [
      " RIPv1 ",
      " RIPv2 ",
      " OSPF ",
      " BGP ",
      " Tất cả các giao thức trên "
    ]
    , "key": [
      " OSPF "

    ]
  },
  {
    "question": "Ưu thế của giao thức định tuyến RIP so với OSPF là gì? ",
    "ans": [
      " Đơn giản hơn khi thực hiện cập nhật bảng định tuyến ",
      " Tốc độ hội tụ nhanh hơn ",
      " Tiết kiệm băng thông ",
      " Triển khai trên mạng có số lượng nút định tuyến lớn  "
    ]
    , "key": [
      " Đơn giản hơn khi thực hiện cập nhật bảng định tuyến "

    ]
  },
  {
    "question": "Nếu các router cài đặt giao thức định tuyến OSPF thì tuyến đường ngắn nhất từ A tới E là gì? ",
    "link": "2.png",
    "ans": [
      " (A, B, D, E) ",
      " (A, C, D, E) ",
      " (A, C, E)  ",
      " (A, B, C, D, E)"
    ]
    , "key": [
      " (A, B, C, D, E)"

    ]
  },
  {
    "question": "Nếu các router cài đặt giao thức định tuyến RIP thì tuyến đường ngắn nhất từ A tới E là gì? ",
    "link": "2.png",
    "ans": [
      " (A, B, D, E) ",
      " (A, C, D, E) ",
      " (A, C, E) ",
      " (A, B, C, D, E)"
    ]
    , "key": [
      " (A, C, E) "

    ]
  },
  {
    "question": "Giao thức BGP thực hiện chức năng nào? ",
    "ans": [
      " Điều khiển truyền dữ liệu giữa các tiến trình trên hệ thống cuối ",
      " Thiết lập kênh trong mạng chuyển mạch kênh ",
      " Định tuyến giữa các vùng tự trị (Autonomous System) trên Internet ",
      " Điều khiển truy nhập đường truyền trong mạng đa truy nhập"
    ]
    , "key": [
      " Định tuyến giữa các vùng tự trị (Autonomous System) trên Internet "

    ]
  },
  {
    "question": "Có thể cài đặt giao thức định tuyến nào sau đây trên router để tìm đường đi tới mạng 108.21.16.0 /20 nằm trong vùng tự trị (AS) của router đó? ",
    "ans": [
      " RIPv1 ",
      " RIPv2 ",
      " OSPF ",
      " BGP "
    ]
    , "key": [
      " RIPv2 ",
      " OSPF "
    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về giao thức định tuyến BGP? ",
    "ans": [
      " Là giao thức định tuyến giữa các AS (Autonomous System) ",
      " Phiên eBGP thực hiện giữa các router cùng một AS ",
      " Các thông điệp của phiên iBGP được định tuyến bởi các giao thức định tuyến nội vùng ",
      " Hai phiên iBGP và eBGP sử dụng giao thức giống nhau "
    ]
    , "key": [
      " Phiên eBGP thực hiện giữa các router cùng một AS "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là SAI về giao thức BGP? ",
    "ans": [
      " Được cài đặt trên tất cả các bộ định tuyến trong AS ",
      " Tìm đường đi tới các AS ",
      " Truyền thông tin định tuyến giữa các bộ định tuyến qua liên kết TCP ",
      " Sử dụng thuật toán định tuyến vec-tơ đường đi (path-vector) "
    ]
    , "key": [
      " Được cài đặt trên tất cả các bộ định tuyến trong AS "

    ]
  },
  {
    "question": "Tầng liên kết dữ liệu không thực hiện chức năng nào ? ",
    "ans": [
      " Đồng bộ tốc độ truyền dữ liệu giữa 2 nút mạng trên liên kết ",
      " Biểu diễn các bit thành tín hiệu ",
      " Kiểm soát lỗi ",
      " Điều khiển truy nhập đường truyền "
    ]
    , "key": [
      " Biểu diễn các bit thành tín hiệu "

    ]
  },
  {
    "question": "Trong hình trạng (topology) mạng nào sau đây, sự cố xảy ra trên đường truyền vật lý có thể cản trở đến quá trình truyền dữ liệu toàn bộ mạng? ",
    "ans": [
      " Hình trục ",
      " Hình sao ",
      " Hình vòng ",
      " Hình lưới "
    ]
    , "key": [
      " Hình trục "

    ]
  },
  {
    "question": "Mạng nào sau đây là mạng điểm-điểm (point-to-point)? ",
    "ans": [
      " Mạng hình trục (bus) ",
      " Mạng hình sao (star) sử dụng bộ chia mạng (hub) ",
      " Mạng hình sao sử dụng bộ định tuyến (router) ",
      " Cả 3 mạng trên "
    ]
    , "key": [
      " Mạng hình sao sử dụng bộ định tuyến (router) "

    ]
  },
  {
    "question": "Mạng nào sau đây thực hiện lan truyền tín hiệu theo phương thức điểm-đa điểm ?(chọn 3 đáp án) ",
    "ans": [
      " Mạng hình trục (bus) ",
      " Mạng hình sao (star) sử dụng hub ",
      " Mạng hình sao (star) sử dụng switch ",
      " Mạng LAN không dây sử dụng chuẩn IEEE802.11 ",
      "Mạng hình sao (star) sử dụng router"
    ]
    , "key": [
      " Mạng hình trục (bus) ",
      " Mạng hình sao (star) sử dụng hub ",
      " Mạng LAN không dây sử dụng chuẩn IEEE802.11 "

    ]
  },
  {
    "question": "Mạng nào sau đây thực hiện lan truyền tín hiệu theo phương thức điểm-đa điểm ? ",
    "ans": [
      " Mạng hình trục (bus) ",
      " Mạng hình sao (star) sử dụng hub ",
      " Mạng hình sao (star) sử dụng switch ",
      " Mạng LAN không dây sử dụng chuẩn IEEE802.11 ",
      "Mạng hình vòng (ring) "
    ]
    , "key": [
      " Mạng hình trục (bus) ",
      " Mạng hình sao (star) sử dụng hub ",
      " Mạng LAN không dây sử dụng chuẩn IEEE802.11 "

    ]
  },
  {
    "question": "Các phương pháp điều khiển truy nhập đường truyền nào sau đây thuộc nhóm phương pháp điều khiển ngẫu nhiên? ",
    "ans": [
      " CSMA ",
      " TDMA ",
      " FDMA ",
      " CDMA ",
      " Slotted Aloha ",
      " Token Passing "
    ]
    , "key": [
      " CSMA ",
      " Slotted Aloha "

    ]
  },
  {
    "question": "Xác suất xảy ra đụng độ trong phương pháp điều khiển truy nhập đường truyền nào sau đây là cao nhất? ",
    "ans": [
      " Pure Aloha ",
      " Slotted Aloha  ",
      " CSMA/CA ",
      " CSMA/CD ",
      " Token passing "
    ]
    , "key": [
      " Pure Aloha "

    ]
  },
  {
    "question": "Phương pháp điều khiển truy nhập đường truyền nào dưới đây không nằm cùng nhóm với các phương pháp khác? ",
    "ans": [
      " Pure Aloha ",
      " Slotted Aloha ",
      " CSMA/CD ",
      " Token Passing "
    ]
    , "key": [
      " Token Passing "

    ]
  },
  {
    "question": "Phương pháp điều khiển truy nhập đường truyền nào dưới đây không nằm cùng nhóm với các phương pháp khác? ",
    "ans": [
      " FDMA ",
      " CDMA ",
      " CSMA ",
      " TDMA "
    ]
    , "key": [
      " CSMA "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về phương pháp điều khiển truy nhập đường truyền Pure Aloha? ",
    "ans": [
      " Thuộc nhóm phương pháp điều khiển truy nhập ngẫu nhiên ",
      " Kiểm tra trạng thái đường truyền trước khi gửi dữ liệu ",
      " Đồng bộ thời gian giữa các nút ",
      " Truyền nhiều khung tin nhất có thể trong một khung thời gian (frame time) "
    ]
    , "key": [
      " Thuộc nhóm phương pháp điều khiển truy nhập ngẫu nhiên "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là sai trong hoạt động của phương pháp điều khiển truy nhập đường truyền Slotted Aloha? (Chọn 2 đáp án) ",
    "ans": [
      " Đồng bộ thời gian giữa các nút mạng ",
      " Mỗi nút mạng được phép truyền trong khe thời gian dành riêng cho nút mạng đó ",
      " Truyền dữ liệu ngay khi cần ",
      " Phát hiện đụng độ và thông báo cho các nút trong mạng "
    ]
    , "key": [
      " Mỗi nút mạng được phép truyền trong khe thời gian dành riêng cho nút mạng đó ",
      " Phát hiện đụng độ và thông báo cho các nút trong mạng "
    ]
  },
  {
    "question": "Điều gì làm cho phương pháp điều khiển truy nhập Slotted Aloha có hiệu quả cao hơn Pure Aloha? ",
    "ans": [
      " Kiểm tra trạng thái đường truyền trước khi đưa dữ liệu lên ",
      " Thiết lập mức ưu tiên truyền của các nút ",
      " Đồng bộ thời gian giữa các nút ",
      " Truyền nhiều hơn một khung tin trong một khe thời gian (frame time) "
    ]
    , "key": [
      " Đồng bộ thời gian giữa các nút "

    ]
  },
  {
    "question": "Đặc điểm nào trong hoạt động của các giao thức điều khiển truy cập đường truyền Pure Aloha làm cho nó có hiệu quả thấp hơn hơn so với SlottedAloha? ",
    "ans": [
      " Truyền dữ liệu ngay khi có thể mà không kiểm tra trạng thái đường truyền ",
      " Chỉ gửi 1 gói tin trong mỗi frame-time ",
      " Không đồng bộ thời gian giữa các nút ",
      " Không kiểm tra trạng thái đường truyền trước khi truyền ",
      " Không thiết lập thứ tự truy cập đường truyền giữa các nút "
    ]
    , "key": [
      " Không đồng bộ thời gian giữa các nút "

    ]
  },
  {
    "question": "Phương pháp điều khiển truy nhập đường truyền CSMA/CD thực hiện như thế nào?",
    "ans": [
      " Cảm nhận năng lượng sóng mang trên đường truyền trước khi truyền ",
      " Cảm nhận năng lượng sóng mang khi truyền khung tin đầu tiên để phát hiện đúng độ ",
      " Duy trì việc phát tín hiệu báo đụng độ trên đường truyền trong một khoảng thời gian để tất cả nút mạng khác cảm nhận được ",
      " Thiết lập độ ưu tiên truy nhập đường truyền cho các nút mạng "
    ]
    , "key": [
      " Cảm nhận năng lượng sóng mang trên đường truyền trước khi truyền ",
      " Cảm nhận năng lượng sóng mang khi truyền khung tin đầu tiên để phát hiện đúng độ ",
      " Duy trì việc phát tín hiệu báo đụng độ trên đường truyền trong một khoảng thời gian để tất cả nút mạng khác cảm nhận được "
    ]
  },
  {
    "question": "Trong hoạt động của phương pháp điều khiển truy nhập đường truyền CSMA/CD, nút mạng không thực hiện những thao tác nào? ",
    "ans": [
      " Kiểm tra sự có mặt của tín hiệu sóng mang trên đường truyền ",
      " Kiểm tra đụng độ trong quá trình truyền ",
      " Phát tín hiệu JAM để duy trì đụng độ ",
      " Chờ đụng độ được vãn hồi trong khoảng thời gian nào đó ",
      " Sau khi đụng độ được vãn hồi, truyền lại ngay mà không cần kiểm tra trạng thái đường truyền "
    ]
    , "key": [
      " Kiểm tra sự có mặt của tín hiệu sóng mang trên đường truyền "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về thẻ bài trong phương pháp truy nhập đường truyền Token Passing?(Chọn 3 đáp án) ",
    "ans": [
      " Thẻ bài được luân chuyển tuần tự qua các nút mạng ",
      " Mỗi nút mạng được phép sử dụng thẻ bài trong một khe thời gian xác định ",
      " Thẻ bài được sử dụng để phát hiện đụng độ trong mạng ",
      " Cho phép thiết lập mức độ ưu tiên truyền dữ liệu ",
      " Là một gói tin có khuôn dạng và kích thước xác định "
    ]
    , "key": [
      " Thẻ bài được luân chuyển tuần tự qua các nút mạng ",
      " Cho phép thiết lập mức độ ưu tiên truyền dữ liệu ",
      " Là một gói tin có khuôn dạng và kích thước xác định "

    ]
  },
  {
    "question": "Trong các mô tả sau về hoạt động của giao thức điều khiển truy nhập đường truyền Token Passing, câu nào là SAI? (Chọn 2 đáp án) ",
    "ans": [
      " Chỉ tồn tại duy nhất một thẻ bài trong mạng để xác định quyền đưa dữ liệu lên đường truyền",
      " Một nút mạng muốn truyền dữ liệu nó phải đợi cho tới khi nhận được thẻ bài có trạng thái rỗi",
      " Khi kết thúc truyền dữ liệu, nút nguồn sẽ gửi thông báo để nút đích xác lập trạng thái cho thẻ bài là rỗi",
      " Sau khi truyền xong dữ liệu, nút mạng sẽ trả thẻ bài về cho trung tâm phân phối thẻ bài "
    ]
    , "key": [
      " Khi kết thúc truyền dữ liệu, nút nguồn sẽ gửi thông báo để nút đích xác lập trạng thái cho thẻ bài là rỗi",
      " Sau khi truyền xong dữ liệu, nút mạng sẽ trả thẻ bài về cho trung tâm phân phối thẻ bài "

    ]
  },
  {
    "question": "Khi điều khiển truy nhập đường truyền, ưu thế của phương pháp phương pháp sử dụng thẻ bài (Token Passing) so với điều khiển ngẫu nhiên là gì? ",
    "ans": [
      " Xác suất đụng độ thấp hơn ",
      " Đơn giản hơn ",
      " Hiệu suất sử dụng đường truyền cao hơn ",
      " Cả 3 đáp án trên"
    ]
    , "key": [
      " Xác suất đụng độ thấp hơn "

    ]
  },
  {
    "question": "Ưu điểm của phương pháp CSMA/CD so với Token Passing là gì? ",
    "ans": [
      " Đơn giản hơn ",
      " Xác suất đụng độ thấp hơn ",
      " Có cơ chế thiết lập thứ tự ưu tiên truyền ",
      " Có cơ chế phát hiện và vãn hồi đụng độ ",
      " Tất cả các đáp án trên"
    ]
    , "key": [
      " Đơn giản hơn "

    ]
  },
  {
    "question": "Điểm khác biệt của chuyển tiếp dữ liệu ở tầng 2 trên switch so với chuyển tiếp ở tầng 3 trên router là gì? ",
    "ans": [
      " Không cần giao thức xác định trước đường đi ",
      " Không cần bảng chuyển tiếp ",
      " Nút đích phải cùng một mạng với nút nguồn ",
      " Các gói tin được xử lý độc lập ",
      " Không quảng bá dữ liệu có địa chỉ đích là địa chỉ quảng bá "
    ]
    , "key": [
      " Nút đích phải cùng một mạng với nút nguồn ",
      " Không cần giao thức xác định trước đường đi "

    ]
  },
  {
    "question": "Khi nhận được một khung tin, switch có thể thực hiện những thao tác xử lý nào ?",
    "ans": [
      " Tìm kiếm cổng ra trên bảng chuyển tiếp theo địa chỉ đích ",
      " Phân mảnh khung tin ",
      " Bổ sung địa chỉ nguồn vào bảng chuyển tiếp nếu chưa biết ",
      " Quảng bá khung tin nếu chưa biết địa chỉ đích "
    ]
    , "key": [
      " Tìm kiếm cổng ra trên bảng chuyển tiếp theo địa chỉ đích ",
      " Bổ sung địa chỉ nguồn vào bảng chuyển tiếp nếu chưa biết ",
      " Quảng bá khung tin nếu chưa biết địa chỉ đích "

    ]
  },
  {
    "question": "Switch xây dựng bảng MAC Table như thế nào? ",
    "ans": [
      " Nếu chưa biết địa chỉ nguồn trên khung tin, thêm vào bảng MAC Table ",
      " Nếu chưa biết địa chỉ đích trên khung tin, thêm vào bảng MAC Table ",
      " Quảng bá một thông điệp tìm kiếm địa chỉ các nút mạng, bổ sung thông tin từ thông điệp trả lời vào bảng MAC Table ",
      " Sử dụng bảng MAC Table từ các switch khác gửi tới "
    ]
    , "key": [
      " Nếu chưa biết địa chỉ nguồn trên khung tin, thêm vào bảng MAC Table "

    ]
  },
  {
    "question": "Switch thực hiện những thao tác xử lý nào khi nhận được một khung tin có địa chỉ đích là A1-B2-C3-D4-E5-F6? ",
    "ans": [
      " Tìm cổng tương ứng trong bảng MAC Table và chuyển khung tin ra cổng đó nếu tìm thấy  ",
      " Bổ sung địa chỉ này vào bảng MAC Table nếu trong bảng chưa có ",
      " Kiểm tra lỗi trên khung tin ",
      " Chuyển ngay khung tin ra tất cả các cổng trừ cổng nhận khung tin ",
      " Hủy khung tin và báo lỗi vì địa chỉ này không hợp lệ. "
    ]
    , "key": [
      " Kiểm tra lỗi trên khung tin ",
      " Tìm cổng tương ứng trong bảng MAC Table và chuyển khung tin ra cổng đó nếu tìm thấy  "

    ]
  },
  {
    "question": "Switch hoạt động ở chế độ chuyển tiếp ”store and forward” thực hiện những thao tác xử lý nào khi nhận được khung tin có địa chỉ MAC đích là FF-FF-FF-FF-FF-FF? ",
    "ans": [
      " Tìm cổng tương ứng trong bảng Switching Table và chuyển khung tin ra cổng đó nếu tìm thấy",
      " Bổ sung địa chỉ này vào bảng Switching Table nếu trong bảng chưa có ",
      " Kiểm tra lỗi trên khung tin ",
      " Chuyển khung tin ra tất cả các cổng trừ cổng nhận khung tin ",
      " Hủy khung tin và báo lỗi vì địa chỉ này không hợp lệ. "
    ]
    , "key": [
      " Kiểm tra lỗi trên khung tin ",
      " Chuyển khung tin ra tất cả các cổng trừ cổng nhận khung tin "

    ]
  },
  {
    "question": "Khi một nút mạng nhận được yêu cầu gửi gói tin tới một nút khác cùng mạng, nếu chưa biết địa chỉ MAC của nút đích, nó sẽ thực hiện như thế nào? ",
    "ans": [
      " Gửi gói tin tới gateway mặc định ",
      " Gửi gói tin với địa chỉ quảng bá ",
      " Gửi thông điệp ARP Request tìm kiếm địa chỉ MAC của nút đích ",
      " Từ chối yêu cầu gửi dữ liệu và báo lỗi "
    ]
    , "key": [
      " Gửi thông điệp ARP Request tìm kiếm địa chỉ MAC của nút đích "

    ]
  },
  {
    "question": "Giao thức ARP(Address Resolution Protocol) thực hiện chức năng nào? ",
    "ans": [
      " Chuyển đổi giữa địa chỉ IP cục bộ và địa chỉ IP công cộng ",
      " Tìm kiếm địa chỉ MAC khi biết địa chỉ IP ",
      " Tìm kiểm địa chỉ IP khi biết địa chỉ MAC ",
      " Tìm kiếm địa chỉ mạng của một mạng "
    ]
    , "key": [
      " Tìm kiếm địa chỉ MAC khi biết địa chỉ IP "

    ]
  },
  {
    "question": "Mô tả nào sau đây là đúng về địa chỉ MAC?(Chọn 2 đáp án) ",
    "ans": [
      " Có 32 bit giá trị ",
      " Sử dụng giá trị duy nhất làm địa chỉ quảng bá là FF-FF-FF-FF-FF-FF ",
      " Địa chỉ MAC của nút mạng thay đổi một cách định kỳ ",
      " Địa chỉ MAC của các nút mạng được cấp phát tự động bởi dịch vụ DHCP ",
      " Được sử dụng để định danh tại tầng liên kết dữ liệu "
    ]
    , "key": [
      " Sử dụng giá trị duy nhất làm địa chỉ quảng bá là FF-FF-FF-FF-FF-FF ",
      " Được sử dụng để định danh tại tầng liên kết dữ liệu "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về địa chỉ MAC?  ",
    "ans": [
      " Là giá trị định danh cho nút mạng tại tầng liên kết dữ liệu ",
      " Thay đổi tùy thuộc theo địa chỉ của mạng mà nút mạng đang kết nối ",
      " Có kích thước 32 bit ",
      " Có thể cấp phát bởi dịch vụ DHCP"
    ]
    , "key": [
      " Là giá trị định danh cho nút mạng tại tầng liên kết dữ liệu "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là sai về chuẩn Ethernet 1000-BASE-T?  ",
    "ans": [
      " Sử dụng cáp xoắn đôi ",
      " Điều khiển truy nhập đường truyền bằng phương pháp CSMA/CD ",
      " Khoảng cách kết nối tối đa là 1000 mét ",
      " Tốc độ truyền tối đa là 1 Gbps "
    ]
    , "key": [
      " Khoảng cách kết nối tối đa là 1000 mét "

    ]
  },
  {
    "question": "Loại mã phát hiện lỗi nào sau đây cho phép phát hiện nhiều vị trí lỗi nhất trên gói dữ liệu? ",
    "ans": [
      " Parity ",
      " Checksum ",
      " CRC-16 ",
      " CRC-32"
    ]
    , "key": [
      " CRC-32"

    ]
  },
  {
    "question": "Chuẩn nào sau đây dùng cho mạng LAN không dây (WLAN)? ",
    "ans": [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.11",
      "IEEE 802.13"

    ]
    , "key": [

    ]
  },
  {
    "question": "Các chuẩn Fast Ethernet có tốc độ truyền tin tối đa là bao nhiêu? ",
    "ans": [
      " 10 Mbps ",
      " 100 Mbps ",
      " 10 Gbps ",
      " 1 Gbps ",
      " 54 Mbps"
    ]
    , "key": [
      " 100 Mbps "

    ]
  },
  {
    "question": "Những mô tả nào sau đây là đúng với chuẩn Ethernet 1000BASE-T? (Chọn 3 đáp án) ",
    "ans": [
      " Mạng dùng cáp xoắn đôi ",
      " Khoảng cách truyền dẫn tối đa là 1000m ",
      " Phù hợp với mọi hình trạng mạng ",
      " Điều khiển truy nhập đường truyền bằng CSMA/CD ",
      " Sử dụng đầu nối RJ-45 "
    ]
    , "key": [
      " Mạng dùng cáp xoắn đôi ",
      " Điều khiển truy nhập đường truyền bằng CSMA/CD ",
      " Sử dụng đầu nối RJ-45 "

    ]
  },
  {
    "question": "Chuẩn nào sau đây là chuẩn Fast Ethernet?(Chọn 2 đáp án) ",
    "ans": [
      " 10BASE-2 ",
      " 10BASE-5 ",
      " 100BASE-T ",
      " 100BASE-F ",
      " 1000BASE-T ",
      " 1000BASE-CX "
    ]
    , "key": [
      " 100BASE-T ",
      " 100BASE-F "

    ]
  },
  {
    "question": "Cáp xoắn đôi được sử dụng trong các chuẩn mạng nào dưới đây?  ",
    "ans": [
      " 10BASE2 ",
      " 10BASE5 ",
      " 100BASE-T ",
      " 100BASE-FX ",
      " IEEE"
    ]
    , "key": [
      " 100BASE-T "

    ]
  },
  {
    "question": "Phương pháp mã hóa nào sau đây sử dụng đề điều chế dữ liệu số-tín hiệu số? ",
    "ans": [
      " Mã parity ",
      " Mã checksum ",
      " Mã vòng CRC ",
      " Mã NRZ ",
      " Mã Manchester"
    ]
    , "key": [
      " Mã NRZ ",
      " Mã Manchester"

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về mã Manchester? ",
    "ans": [
      " Được sử dụng tại tầng vật lý ",
      " Bit 1 được biểu diễn luân phiên bởi các xung âm và xung dương ",
      " Chuyển về mức điện áp 0 ở giữa xung ",
      " Thay thế chuỗi các bit 0 liên tiếp bằng mẫu bít đặc biệt để tránh mất đồng bộ "
    ]
    , "key": [
      " Được sử dụng tại tầng vật lý "

    ]
  },
  {
    "question": "Mã chống nhiễu nào sau đây có thể phát hiện được nhiều lỗi nhất? ",
    "ans": [
      " Mã parity chẵn ",
      " Mã parity lẻ ",
      " Mã checksum ",
      " Mã CRC-16 ",
      " Mã CRC-32"
    ]
    , "key": [
      " Mã CRC-32"

    ]
  },
  {
    "question": "Phương pháp mã hóa Manchester có thể được sử dụng tại tầng nào trong mô hình OSI? ",
    "ans": [
      " Tầng ứng dụng ",
      " Tầng giao vận ",
      " Tầng liên kết dữ liệu ",
      " Tầng vật lý "
    ]
    , "key": [
      " Tầng vật lý "

    ]
  },
  {
    "question": "Giao thức mạng là một tập hợp về các quy tắc truyền thông tin trong mạng máy tính. Các quy tắc này gồm những gì? (Chọn tất cả đáp án) ",
    "ans": [
      " Cách thức xử lý dữ liệu ",
      " Loại hệ điều hành cần sử dụng ",
      " Thứ tự truyền của dữ liệu ",
      " Cú pháp và ngữ nghĩa của dữ liệu ",
      " Loại thiết bị cần phải sử dụng"
    ]
    , "key": [
      " Cách thức xử lý dữ liệu ",
      " Thứ tự truyền của dữ liệu ",
      " Cú pháp và ngữ nghĩa của dữ liệu "

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về mô hình TCP/IP?(Chọn tất cả đáp án đúng) ",
    "ans": [
      " Là phần mềm để truyền dữ liệu giữa các nút mạng ",
      " Là mô hình xây dựng thành phần phần cứng cho mỗi nút trong mạng ",
      " Có một tập hợp các giao thức để điều khiển hoạt động truyền tin trong mạng ",
      " Là một mô hình để phát triển các chức năng cho thành phần phần mềm cho mỗi nút mạng ",
      " Là mô hình dùng cho mạng Internet ",
      " Là một mô hình phân tầng"
    ]
    , "key": [
      " Có một tập hợp các giao thức để điều khiển hoạt động truyền tin trong mạng ",
      " Là một mô hình để phát triển các chức năng cho thành phần phần mềm cho mỗi nút mạng ",
      " Là mô hình dùng cho mạng Internet ",
      " Là một mô hình phân tầng"

    ]
  },
  {
    "question": "Thứ tự đúng khi liệt kê từ trên xuống của các tầng trong mô hình TCP/IP là gì?  ",
    "ans": [
      " Giao vận, Ứng dụng, Mạng, Liên kết dữ liệu, Vật lý ",
      " Ứng dụng, Mạng, Giao vận, Liên kết dữ liệu, Vật lý ",
      " Ứng dụng, Giao vận, Mạng, Liên kết dữ liệu, Vật lý ",
      " Ứng dụng, Liên kết dữ liệu, Giao vận, Mạng, Vật lý ",
      " Vật lý, Mạng, Liên kết dữ liệu, Ứng dụng, Giao vận"
    ]
    , "key": [
      " Ứng dụng, Giao vận, Mạng, Liên kết dữ liệu, Vật lý "

    ]
  },
  {
    "question": "Các chức năng của tầng trình diễn và tầng phiên trong mô hình OSI được thực hiện trên tầng nào của mô hình TCP/IP?  ",
    "ans": [
      " Liên kết dữ liệu ",
      " Giao vận ",
      " Ứng dụng  ",
      " Vật lý ",
      " Mạng"
    ]
    , "key": [
      " Ứng dụng  "

    ]
  },
  {
    "question": "Tầng vật lý thực hiện chức năng nào?  ",
    "ans": [
      " Điều khiển truyền tín hiệu trên đường truyền ",
      " Điều khiển truyền dữ liệu giữa 2 thiết bị trên liên kết vật lý ",
      " Điều khiển truyền dữ liệu qua các mạng khác nhau ",
      " Điều khiển truyền dữ liệu giữa các ứng dụng mạng"
    ]
    , "key": [
      " Điều khiển truyền tín hiệu trên đường truyền "

    ]
  },
  {
    "question": "Đâu là ưu điểm của cáp quang so với cáp đồng?(Chọn 3 đáp án)  ",
    "ans": [
      " Chống nhiễu tốt hơn ",
      " Kết nối xa hơn ",
      " Tốc độ truyền cao hơn ",
      " Bền chắc hơn ",
      " Rẻ hơn"
    ]
    , "key": [
      " Chống nhiễu tốt hơn ",
      " Kết nối xa hơn ",
      " Tốc độ truyền cao hơn "

    ]
  },
  {
    "question": "Trong kiến trúc phân tầng TCP/IP, tầng liên kết dữ liệu thực hiện chức năng nào?  ",
    "ans": [
      " Điều khiển truyền tín hiệu trên đường truyền ",
      " Điều khiển truyền dữ liệu qua các mạng ",
      " Điều khiển truyền dữ liệu giữa các ứng dụng ",
      " Điều khiển truyền dữ liệu giữa các nút trên liên kết vật lý"
    ]
    , "key": [
      " Điều khiển truyền dữ liệu giữa các nút trên liên kết vật lý"

    ]
  },
  {
    "question": "Phát biểu nào sau đây là đúng về địa chỉ MAC?(Chọn 2 đáp án)  ",
    "ans": [
      " Có thể cấp phát bởi dịch vụ DHCP ",
      " Thay đổi tùy thuộc theo địa chỉ của mạng mà nút mạng đang kết nối ",
      " Có kích thước 48 bit ",
      " Dùng để phân biệt các nút khác nhau trong cùng mạng"
    ]
    , "key": [
      " Có kích thước 48 bit ",
      " Dùng để phân biệt các nút khác nhau trong cùng mạng"

    ]
  },
  {
    "question": "Trường Preamble trong khung tin Ethernet được sử dụng như thế nào?(Chọn 2 đáp án)  ",
    "ans": [
      " Phát hiện lỗi trên khung tin ",
      " Báo hiệu bắt đầu một khung tin ",
      " Đồng bộ tốc độ truyền"
    ]
    , "key": [
      " Báo hiệu bắt đầu một khung tin ",
      " Đồng bộ tốc độ truyền"

    ]
  },
  {
    "question": "Kích thước tối thiểu của khung tin Ethernet là bao nhiêu byte?  ",
    "ans": [
      " 0 ",
      " 26 ",
      " 64 ",
      " 46"
    ]
    , "key": [
      " 64 "

    ]
  },
  {
    "question": "Những hoạt động nào sau đây diễn ra tại tầng mạng?(Chọn 3 đáp án)  ",
    "ans": [
      " Đóng gói dữ liệu ",
      " Sửa lỗi dữ liệu ",
      " Thiết lập liên kết giữa các ứng dụng mạng ",
      " Chuyển tiếp dữ liệu sang mạng khác ",
      " Tìm đường đi"
    ]
    , "key": [
      " Đóng gói dữ liệu ",
      " Chuyển tiếp dữ liệu sang mạng khác ",
      " Tìm đường đi"

    ]
  },
  {
    "question": "Bộ định tuyến KHÔNG thực hiện bước xử lý nào sau đây khi chuyển tiếp một gói tin IPv4?  ",
    "ans": [
      " Kiểm tra giá trị TTL của gói tin ",
      " Kiểm tra lỗi bit cho phần tiêu đề ",
      " Tìm kiếm lối ra dựa trên địa chỉ đích ",
      " Phân mảnh gói tin nếu kích thước lớn hơn giá trị MTU của đường truyền ",
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết"
    ]
    , "key": [
      " Bổ sung địa chỉ đích vào bảng chuyển tiếp nếu chưa biết"

    ]
  },
  {
    "question": "Trong hoạt động chuyển tiếp gói tin IPv4 trên router, lý do nào sau đây khiến gói tin bị loại bỏ?  (Chọn 4 đáp án) ",
    "ans": [
      " Giá trị TTL = 0 ",
      " Không tìm thấy cổng ra trên bảng chuyển tiếp ",
      " Phát hiện lỗi thông qua trường checksum ",
      " Gói tin bị phân mảnh ",
      " Hàng đợi trên router bị đầy"
    ]
    , "key": [
      " Giá trị TTL = 0 ",
      " Không tìm thấy cổng ra trên bảng chuyển tiếp ",
      " Phát hiện lỗi thông qua trường checksum ",
      " Hàng đợi trên router bị đầy"

    ]
  },
  {
    "question": "Địa chỉ nào sau đây thuộc phân lớp B? (Chọn tất cả đáp án đúng)  ",
    "ans": [
      "120.37.145.208",
      "132.34.41.13",
      "198.37.12.5",
      "115.3.197.31",
      "180.201.1.3"
    ]
    , "key": [
      "132.34.41.13",
      "180.201.1.3"

    ]
  },
  {
    "question": "Địa chỉ nào sau đây thuộc phân lớp C?(Chọn tất cả đáp án đúng)  ",
    "ans": [
      "230.16.4.118",
      "154.23.87.119",
      "95.246.13.1",
      "194.56.129.56",
      "208.67.222.222"
    ]
    , "key": [

      "208.67.222.222"
    ]
  },
  {
    "question": "Địa chỉ nào sau đây là địa chỉ mạng?(Chọn tất cả đáp án đúng)  ",
    "ans": [
      "202.191.56.64 /27",
      "24.2.128.0 /17",
      "100.4.0.0 /11",
      "140.31.32.0 /18"
    ]
    , "key": [
      "202.191.56.64 /27",
      "24.2.128.0 /17"

    ]
  },
  {
    "question": "Địa chỉ nào sau đây địa chỉ quảng bá?(Chọn tất cả đáp án đúng)  ",
    "ans": [
      "134.25.14.255 /20",
      "80.63.255.255 /8",
      "134.25.14.255 /24",
      "195.34.1.159 /28",
      "80.63.255.255 /12"
    ]
    , "key": [
      "134.25.14.255 /24",
      "195.34.1.159 /28",
      "80.63.255.255 /12"

    ]
  },
  {
    "question": "Thông điệp DHCP nào được máy trạm gửi đi để tìm kiếm máy chủ DHCP?  ",
    "ans": [
      " DHCP Request ",
      " DHCP Offer ",
      " DHCP Release ",
      " DHCP Discover"
    ]
    , "key": [
      " DHCP Discover"

    ]
  },
  {
    "question": "Thông điệp DHCP nào chứa bộ thông số địa chỉ IP của mà server giới thiệu tới client?  ",
    "ans": [
      " DHCP Offer ",
      " DHCP NAK ",
      " DHCP ACK ",
      " DHCP Request"
    ]
    , "key": [
      " DHCP Offer "

    ]
  },
  {
    "question": "Mục đích cài đặt DHCP Relay Agent trên bộ định tuyến là gì? ",
    "ans": [
      " Xác định đường đi tới máy chủ DHCP ",
      " Chuyển tiếp các thông điệp DHCP ",
      " Ngặn chặn các thông điệp DHCP của máy chủ lạ gửi vào trong mạng"
    ]
    , "key": [
      " Chuyển tiếp các thông điệp DHCP "

    ]
  },
  {
    "question": "Chế độ NAT nào nên được sử dụng để chuyển đổi địa chỉ IP cho một máy chủ nằm trong mạng nội bộ cung cấp dịch vụ tới mạng công cộng?  ",
    "ans": [
      " Static NAT ",
      " Dynamic NAT ",
      " PAT"
    ]
    , "key": [
      " Static NAT "

    ]
  },

  {
    "question": "Giao thức ARP thực hiện chức năng gì?  ",
    "ans": [
      " Tìm đường đi tới các mạng ",
      " Gửi thông tin báo lỗi khi chuyển tiếp gói tin IP ",
      " Tìm địa chỉ MAC của một nút trong cùng mạng ",
      " Tìm địa chỉ IP của một nút trong cùng mạng"
    ]
    , "key": [
      " Tìm địa chỉ MAC của một nút trong cùng mạng "

    ]
  },
  {
    "question": "Thông điệp ARP Request được gửi đi theo phương thức nào?  ",
    "ans": [
      " Broadcast ",
      " Multicast ",
      " Unicast"
    ]
    , "key": [
      " Broadcast "

    ]
  },
  {
    "question": "Công cụ ping gửi đi thông điệp nào sau đây?  ",
    "ans": [
      " ICMP Echo Reply ",
      " Destination Network Unknow ",
      " ICMP Echo Request ",
      " Destination Network Unreachable"
    ]
    , "key": [
      " ICMP Echo Request "

    ]
  },
  {
    "question": "Thông điệp ICMP Time Exceeded được một nút gửi đi khi nào? ",
    "ans": [
      " Không tìm thấy đường đi để chuyển tiếp gói tin ",
      " Nhận được gói tin IP bị phân mảnh ",
      " Nhận được gói tin có giá trị TTL = 0 ",
      " Hàng đợi chờ chuyển tiếp gói tin bị đầy"
    ]
    , "key": [
      " Nhận được gói tin có giá trị TTL = 0 "
    ]
  },
  {
    "question": "Gói tin TCP được gửi đi để yêu cầu thiết lập liên kết sử dụng giá trị cờ nào?  ",
    "ans": [
      " ACK ",
      " URG ",
      " PSH ",
      " SYN ",
      " RST ",
      " FIN"
    ]
    , "key": [
      " SYN "

    ]
  },
  {
    "question": "Gói tin TCP báo chấp nhận yêu cầu kết nối sử dụng giá trị cờ nào?(Chọn tất cả đáp án đúng)  ",
    "ans": [
      " ACK ",
      " URG ",
      " PSH ",
      " SYN ",
      " RST ",
      " FIN"
    ]
    , "key": [
      " ACK ",
      " SYN "

    ]
  },
  {
    "question": "Giá trị cờ nào được sử dụng trên gói tin TCP để báo kết thúc gửi dữ liệu?  ",
    "ans": [
      " ACK ",
      " URG ",
      " PSH ",
      " SYN ",
      " RST ",
      " FIN"
    ],
    "key": [

      " FIN"
    ]
  }
]
function App() {
  const [quizId, setQuizId] = useState(0);
  const changeQuiz = () => {
    setQuizId(quizId + 1);
  }
  return (
    <div className="App d-flex justify-center align-center full-height">

      <Quiz quiz={quiz[quizId]} handleChangeQuiz={changeQuiz}></Quiz>
    </div>
  );
}

export default App;
