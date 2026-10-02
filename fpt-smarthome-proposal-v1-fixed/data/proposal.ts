export type Room = { name: string; subtitle: string; summary: string; items: string[]; visual: string };
export type EstimateItem = [name: string, qty: number, unit: string, price: number];

export const proposal = {
  brand: 'STC CROP',
  customer: 'Anh Mạnh',
  location: 'Đắk Lắk',
  version: '06',
  date: '30/09/2026',
  status: 'CHỜ DUYỆT',
  total: 122226300,
  installationRate: 0.15,
  discountRate: 0.10,
  counts: [
    ['Công tắc chiếu sáng', '32'],
    ['Bộ động cơ rèm', '04'],
    ['Camera quan sát', '04'],
    ['Bộ điều khiển cửa/cổng', '01'],
  ],
  groups: [
    { no:'01', title:'Chiếu sáng', text:'10 công tắc 1 nút, 11 công tắc 2 nút, 10 công tắc 3 nút và 1 công tắc 4 nút. Kèm 3 bộ trung tâm/mở rộng sóng theo báo giá.', icon:'✦' },
    { no:'02', title:'Rèm tự động', text:'Phòng khách và phòng master, mỗi nơi 2 động cơ, 2 công tắc. Tổng ray dự kiến 16 m, đo lại trước khi sản xuất.', icon:'◐' },
    { no:'03', title:'Camera an ninh', text:'2 SE 3 cho phòng khách, bếp + ăn. 2 SE 2S cho ban công trước và sau theo bảng bố trí.', icon:'◉' },
    { no:'04', title:'Cửa/cổng', text:'1 công tắc điều khiển động cơ. Chọn cửa cuốn hoặc cổng và kiểm tra tương thích bộ điều khiển hiện hữu trước lắp đặt.', icon:'⌂' },
  ],
  rooms: [
    { name:'Phòng khách', subtitle:'Đón khách và sinh hoạt chung', summary:'4 công tắc • 2 động cơ rèm • 1 camera SE 3', visual:'living', items:['Công tắc 3 nút Line 1,2,3','Công tắc 3 nút Line 4,5,6','Công tắc 4 nút Line 7,8,59,60','Công tắc 3 nút Line 52,53,54'] },
    { name:'Phòng đọc sách', subtitle:'Ánh sáng cho khoảng riêng', summary:'2 công tắc 1 nút', visual:'study', items:['Công tắc 1 nút Line 9','Công tắc 1 nút Line 10'] },
    { name:'Khu bếp + ăn', subtitle:'Thuận tiện khi nấu ăn và dùng bữa', summary:'2 công tắc • 1 camera SE 3', visual:'kitchen', items:['Công tắc 2 nút Line 14,15','Công tắc 3 nút Line 11,12,13'] },
    { name:'Phòng ngủ 1', subtitle:'Điều khiển ngay tại đầu giường', summary:'5 công tắc', visual:'bed1', items:['Công tắc 2 nút Line 45A,46A','Công tắc 1 nút Line 49A','Công tắc 3 nút Line 47,48,50','Công tắc 2 nút Line 45B,46B','Công tắc 2 nút Line 55,56'] },
    { name:'Phòng ngủ 2', subtitle:'Ánh sáng theo từng hoạt động', summary:'6 công tắc', visual:'bed2', items:['Công tắc 2 nút Line 37,38','Công tắc 1 nút Line 40','Công tắc 2 nút Line 37B,38B','Công tắc 1 nút Line 39','Công tắc 2 nút Line 41,57','Công tắc 3 nút Line 42,43,44'] },
    { name:'Phòng master', subtitle:'Nghỉ ngơi theo thói quen', summary:'8 công tắc • 2 động cơ rèm', visual:'master', items:['Công tắc 2 nút Line 22B,23B','Công tắc 3 nút Line 24,25,26','Công tắc 2 nút Line 22A,23A','Công tắc 2 nút Line 28,58','Công tắc 3 nút Line 29,30,31','Công tắc 3 nút Line 32,33,34','Công tắc 1 nút Line 35','Công tắc 1 nút Line 36'] },
    { name:'Hành lang', subtitle:'Thao tác thuận tiện ở hai đầu', summary:'2 công tắc 1 nút', visual:'hall', items:['Công tắc 1 nút Line 16A','Công tắc 1 nút Line 16B'] },
    { name:'WC1', subtitle:'Tách các nhóm thiết bị', summary:'3 công tắc', visual:'bath', items:['Công tắc 3 nút Line 17,18,19','Công tắc 2 nút Line 20,21','Công tắc 1 nút Line 51'] },
  ] as Room[],
  estimates: [
    ['Công tắc 1 nút',10,'Bộ',2079000],['Công tắc 2 nút',11,'Bộ',2079000],['Công tắc 3 nút',10,'Bộ',2079000],['Công tắc 4 nút',1,'Bộ',2079000],['Bộ điều khiển trung tâm và thiết bị mở rộng sóng',3,'Bộ',4329000],['Công tắc điều khiển động cơ',1,'Bộ',1639000],['Công tắc điều khiển động cơ rèm',4,'Bộ',1639000],['Động cơ và phụ kiện rèm cửa kéo ngang',4,'Bộ',3774000],['Thanh ray rèm kéo ngang',16,'mét',550000],['FPT Camera SE 2S',2,'Bộ',1300000],['FPT Camera SE 3',2,'Bộ',1100000]
  ] as EstimateItem[],
  scenarios: {
    home:'Bật nhóm đèn tiếp khách, mở rèm theo lớp đã chốt.',
    sleep:'Tắt đèn chính, giữ đèn ngủ đã chọn; đóng rèm master.',
    away:'Tắt các nhóm đèn đã chọn và đóng rèm phòng khách/master; camera tiếp tục quan sát.'
  },
  steps: [
    ['01','Khảo sát & thống nhất','Kiểm tra tải, dây nguồn, đế âm, vị trí điều khiển hai chiều, sóng kết nối và kích thước ray.'],
    ['02','Lắp đặt & cấu hình','Phân phòng, đặt tên dễ nhớ, thiết lập ngữ cảnh đã thống nhất và kiểm tra vận hành từng thiết bị.'],
    ['03','Nghiệm thu & bàn giao','Thử từng phòng, hướng dẫn sử dụng, chia sẻ quyền cho gia đình và bàn giao danh mục thiết bị.']
  ]
};

export const formatVND = (n:number) => new Intl.NumberFormat('vi-VN').format(n) + ' đ';
