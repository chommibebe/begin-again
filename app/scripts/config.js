(function (window, document) {
    'use strict';

    var BA_CONFIG = {
        // 초기 접속 여부 판단
        isFirst: true,
        debug: true,

        // 자주 사용되는 Selector
        $window: angular.element(window),
        $body: angular.element('body'),
        $document: angular.element(document),
        "title": "BEGIN AGAIN",
        "header": {
            "menus": [
                {
                    "index": 0,
                    "name": "ABOUT B.A.",
                    "url": "about"
                },
                {
                    "index": 1,
                    "name": "GALLERY",
                    "url": "gallery"
                },
                {
                    "index": 2,
                    "name": "OST",
                    "url": "ost"
                },
                {
                    "index": 3,
                    "name": "MOVIE",
                    "url": "movie"
                }
            ]
        },
        "footer": {
            "copyright": "Copyright 2014. CHOMMI All right reserved."
        },
        "main": {
            "url": "main.jpg",
            "name": "main"
        },
        "about": {
            "summary": {
                "content": "싱어송라이터인 ‘그레타’(키이라 나이틀리)는 남자친구 ‘데이브’(애덤 리바인)가 메이저 음반회사와 계약을 하게 되면서 뉴욕으로 오게 된다. 그러나 행복도 잠시, 오랜 연인이자 음악적 파트너로서 함께 노래를 만들고 부르는 것이 좋았던 그레타와 달리 스타가 된 데이브의 마음은 어느새 변해버린다. <br/> <br/> 스타 음반프로듀서였지만 이제는 해고된 ‘댄’(마크 러팔로)은 미치기 일보직전 들른 뮤직바에서 그레타의 자작곡을 듣게 되고 아직 녹슬지 않은 촉을 살려 음반제작을 제안한다. 거리 밴드를 결성한 그들은 뉴욕의 거리를 스튜디오 삼아 진짜로 부르고 싶었던 노래를 만들어가는데... ",
                "title": "\"다시 시작해, 너를 빛나게 할 노래를!\""
            },
            "casting": [
                {
                    "actor": "키이라 나이틀리 (Keira Knightley)",
                    "name": "그레타 역",
                    "index": 0
                },
                {
                    "actor": "마크 러팔로 (Mark Ruffalo)",
                    "name": "댄 역",
                    "index": 1
                },
                {
                    "actor": "애덤 리바인 (Adam Levine)",
                    "name": "데이브 역",
                    "index": 2
                }
            ]
        },
        "gallery": [
            {
                "url": "img_03.jpg",
                "name": "img_03",
                "index": 0
            },
            {
                "url": "img_04.jpg",
                "name": "img_04",
                "index": 1
            },
            {
                "url": "img_05.jpg",
                "name": "img_05",
                "index": 2
            },
            {
                "url": "img_06.jpg",
                "name": "img_06",
                "index": 3
            },
            {
                "url": "img_07.jpg",
                "name": "img_07",
                "index": 4
            },
            {
                "url": "img_08.jpg",
                "name": "img_08",
                "index": 5
            }
        ],
        "ost": [
            {
                "url": "https://www.youtube.com/embed/VJkuYkyj2Wk?enablejsapi=1&wmode=opaque",
                "poster": "img_09.png",
                "name": "Lost Stars lyrics by Adam Levine",
                "index": 0
            },
            {
                "url": "https://www.youtube.com/embed/LZRHYp73GlA?enablejsapi=1&wmode=opaque",
                "poster": "img_10.png",
                "name": "Tell Me If You Wanna Go Home lyrics by Keira Knightley",
                "index": 1
            },
            {
                "url": "https://www.youtube.com/embed/urINeopTXQs?enablejsapi=1&wmode=opaque",
                "poster": "img_11.png",
                "name": "No One Else Like You lyrics by Adam Levine",
                "index": 2
            },
            {
                "url": "https://www.youtube.com/embed/PHj7LdKy9Yw?enablejsapi=1&wmode=opaque",
                "poster": "img_12.png",
                "name": "Horny lyrics by Cee Lo Green",
                "index": 3
            },
            {
                "url": "https://www.youtube.com/embed/sLTRSakuugs?enablejsapi=1&wmode=opaque",
                "poster": "img_13.png",
                "name": "Lost Stars lyrics by Keira Knightley",
                "index": 4
            },
            {
                "url": "https://www.youtube.com/embed/bvSLW4ZKI-A?enablejsapi=1&wmode=opaque",
                "poster": "img_14.png",
                "name": "A Higher Place lyrics by Adam Levine",
                "index": 5
            },
            {
                "url": "https://www.youtube.com/embed/_LFiPqAwIkQ?enablejsapi=1&wmode=opaque",
                "poster": "img_15.png",
                "name": "Like A Fool lyrics by Keira Knightley",
                "index": 6
            },
            {
                "url": "https://www.youtube.com/embed/Zy2lFVlRFA0?enablejsapi=1&wmode=opaque",
                "poster": "img_16.png",
                "name": "Did it ever cross your mind lyrics by Cessyl Orchestra",
                "index": 7
            },
            {
                "url": "https://www.youtube.com/embed/bKxodgpyGec?enablejsapi=1&wmode=opaque",
                "poster": "img_17.png",
                "name": "Woman of the world lyrics by Cee Lo Green",
                "index": 8
            }
        ],
        "movie": [
            {
                "_id": "uTRCxOE7Xzc",
                "url": "https://www.youtube.com/embed/uTRCxOE7Xzc?enablejsapi=1&wmode=opaque",
                "poster": "img_18.jpg",
                "name": "Movie trailer 1",
                "index": 0
            },
            {
                "_id": "rbf5TPL81ag",
                "url": "https://www.youtube.com/embed/rbf5TPL81ag?enablejsapi=1&wmode=opaque",
                "poster": "img_19.jpg",
                "name": "Movie trailer 2",
                "index": 1
            },
            {
                "_id": "nlp7ywUD8wc",
                "url": "https://www.youtube.com/embed/nlp7ywUD8wc?enablejsapi=1&wmode=opaque",
                "poster": "img_20.jpg",
                "name": "Coming Up Roses",
                "index": 2
            },
            {
                "_id": "rtZSgDjoqNo",
                "url": "https://www.youtube.com/embed/rtZSgDjoqNo?enablejsapi=1&wmode=opaque",
                "poster": "img_21.jpg",
                "name": "BEGIN AGAIN Interviews",
                "index": 3
            }
        ]
    };

    // 설정 정보를 angular constant 등록
    angular.module('beginAgainApp').constant('BA_CONFIG', BA_CONFIG);
})(window, document);