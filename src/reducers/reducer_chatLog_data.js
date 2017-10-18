export default function() {
  return {
    // 채팅로그 
    chatLog: [
      {
        id: 1,
        userId: 1,
        message: '홍콩이 좋다.', 
        created_at: '9시 30분'
      },
      {
        id: 2,
        userId: 2,
        message: '10월 27일에 다들 시간되시나여?', 
        created_at: '9시 31분'
      },
      {
        id: 3,
        userId: 2,
        message: '안되는 분들은 지금 말해주세여', 
        created_at: '9시 31분'
      },
      {
        id: 4,
        userId: 3,
        message: '저는 되긴하는데 아마 8시 이후에 출발해야 될거 같아요', 
        created_at: '9시 45분'
      },
      {
        id: 5,
        userId: 1,
        message: '넹 그러면 그때 보는걸로 합시다', 
        created_at: '10시 1분'
      },
    ],
    // 채팅방정보
    chatRoom: [
      { 
        id: 1,
        start_at: '10월 27일',
        name: '홍콩으로 여행',
        description: '10월 27일에 홍콩으로 여행갈 사람 구합니다.',
        city_name: '홍콩', 
        participants: [
          // creator는 맨 처음에 포함되어서 전달 participants[0] => creator
          {
            userId: 1, 
            nickname: '수박', 
            profilePhoto: 'https://randomuser.me/api/portraits/women/94.jpg'
          },
          {
            userId: 2, 
            nickname: '레몬', 
            profilePhoto: 'https://randomuser.me/api/portraits/women/19.jpg'
          },
          {
            userId: 3,
            nickname: '자몽',
            profilePhoto: 'https://randomuser.me/api/portraits/men/96.jpg'
          }
        ]
      },
    ],
    currentUser: {
      userId: 1,
      nickname: '자몽'
    },
  }
}