videosList = [
  {
    id: 1,
    title: 'Hài Tết 2018 Trấn Thành, Trường Giang - Hài Người Lạ Ơi - Hài Tuyển Chọn Trấn Thành, Trường Giang',
    img: 'fdFUe2svE78',
   url: 'https://www.youtube.com/embed/fdFUe2svE78'
  },
  {
    id: 2,
    title: 'Xem Đi Xem Lại Cả 1000 Lần Mà Vẫn Không Thể Nhịn Được',
    img: 'WEob84mwz9s',
    url: 'https://www.youtube.com/embed/WEob84mwz9s'
  },
  {
    id: 3,
    title: 'Những tiết mục "Đỉnh của Đỉnh" qua các mùa Thách Thức Danh Hài',
    img: 'CUCKEdWommM',
    url: 'https://www.youtube.com/embed/CUCKEdWommM'
  },
  {
    id: 4,
    title: 'Thách thức danh hài: Tổng hợp tiết mục "trăm triệu" khiến Trấn Thành "cười ra nước mắt',
    img: 'Infx0hkrzMk',
    url: 'https://www.youtube.com/embed/Infx0hkrzMk'
  },
  {
    id: 5,
    title: 'Thách thức danh hài 3 | tập 13: cụ bà 73 tuổi đi thi vì lời thách thức của chồng',
    img: 'qywrqmYD0S8',
    url: 'https://www.youtube.com/embed/qywrqmYD0S8'
  },
  {
    id: 6,
    title: 'Hài Tết 2018 Trấn Thành, Hoài Linh, Trường Giang',
    img: 'REUWvfCqZcI',
    url: 'https://www.youtube.com/embed/REUWvfCqZcI'
  },
  {
    id: 7,
    title: 'Hài Hoài Linh | Một Trái Tim Hai Tiếng Hát ',
    img: 'iJ0h1q7NTw4',
    url: 'https://www.youtube.com/embed/iJ0h1q7NTw4'
  },
  {
    id: 8,
    title: '10 Khó phần 3 Đàm Vĩnh Hưng No Đòn',
    img: 'yD2iHrVJNn0',
    url: 'https://www.youtube.com/embed/yD2iHrVJNn0'
  },
  {
    id: 9,
    title: 'Hài kịch: TÌNH YÊU TRẮC TRỞ',
    img: 'wqTw6fG3d7M',
    url: 'https://www.youtube.com/embed/wqTw6fG3d7M'
  },
  {
    id: 10,
    title: 'Độc và Đẹp - Hài kịch 25 Năm Tình Cũ ',
    img: 'UxVkK4HA180',
    url: 'https://www.youtube.com/embed/UxVkK4HA180'
  }
]
let index = 0;
let playing;
let listNum = videosList.length;
let title = 'https://gdata.youtube.com/feeds/api/videos/(the-video-id)?v=2&alt=json';
function show_video() {
  if(localStorage.getItem('current-playing')===null){
    playing = videosList[0];
  } else {
    playing = JSON.parse(localStorage.getItem('current-playing'));
  }
  $('#current-playing').attr('src', playing['url']);
  localStorage.setItem('current-playing',JSON.stringify(playing));
  $('#title').append(playing['title']);
}
function list_video() {
  let listItem, item, image;
  for(let i = 0; i < listNum; i++) {
    if(playing['url'] !== videosList[i]['url']) {
    listItem = document.createElement('li');
    document.getElementById('video-list').appendChild(listItem);
    listItem.setAttribute('class','video-item');
    itemTitle = document.createElement('button');
    itemTitle.setAttribute('id',videosList[i]['id']);
    itemTitle.setAttribute('onclick','changeVideo(this.id)');
    itemTitle.setAttribute('class','change-btn');
    listItem.appendChild(itemTitle);
    image = document.createElement('img');
    document.getElementById(videosList[i]['id']).appendChild(image);
    image.setAttribute('class','video-thumb');
    image.setAttribute('onclick',"playVideo[\"" + videosList[i]['id'] + "\"]");
    image.setAttribute('src',"http://img.youtube.com/vi/" + videosList[i]['img'] + "/0.jpg");
    itemTitle.appendChild(image);
    }
  }
  }

function playVideo(clickedID) {
  if(clickedID === 'next-video') {
    if (index > listNum - 1) {
      index = 0;
    } 
    index++;
    playing = videosList[index];
    $('#current-playing').attr('src',playing['url']);
    localStorage.setItem('current-playing',JSON.stringify(playing));
  } else {
     if(index <= 0) { 
      index = listNum - 1;
    }
    index--;
    playing = videosList[index];
    $('#current-playing').attr('src',playing['url']);
    localStorage.setItem('current-playing',JSON.stringify(playing));
  }
  document.getElementById("video-list").innerHTML = "";
  list_video();
  $('#title').text(playing['title']);
}
function changeVideo(changeID) {
  playing = videosList[changeID-1];
  $('#current-playing').attr('src',playing['url']);
  localStorage.setItem('current-playing',JSON.stringify(playing));
  $("#video-list").text(" ");
  list_video();
  $('#main-title').text(playing['title']);
}

show_video();
list_video();