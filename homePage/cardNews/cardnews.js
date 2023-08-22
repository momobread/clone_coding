//클릭이 어디로 되어있나 기준으로 할껀데
// const news
const news_list = document.getElementById('news_list');
const mediaEdit_list = document.getElementById('mediaEdit_list');
const entertain_list = document.getElementById('entertain_list');
const sports_list = document.getElementById('sports_list');
const economics_list = document.getElementById('economics_list');

const news_news = document.getElementById('news');
const news_mediaEdit = document.getElementById('mediaEdit');
const news_entertain = document.getElementById('entertain');
const news_sports = document.getElementById('sports');
const news_economics = document.getElementById('economics');


const news_list_form = [];
const news_list_form_link = [];
const news_list_form_href = [];

//각각의 변수 만들기 / 큰폼[div](addeventlistener),
// 작은폼[a](원본그림 보여주기/왜냐하면 a안에 img가 있으니까),
// 각 작은폼의 href (미리 만들어둘 preview카드에 자식으로 넣으려고)
for (let i = 1; i <= 24; i++) {
    news_list_form[i] = document.querySelector(`.news_list_form${i}`);
    console.log(news_list_form[i])
    news_list_form_link[i] = document.querySelector(`.news_list_form${i}_link`);
    console.log("천번째" + news_list_form_link[i]);
    news_list_form_href[i] = document.querySelector(`.news_list_form${i}_link`).href
    console.log(news_list_form_href[i]);
}


// preview (파란상자/미리보기)만드는중
const a = document.createElement('a');
const previewcard = [];
const previewNews = [];
a.innerText = "기사보기";
a.style.textDecoration = "underline"
a.style.display = "flex";
a.style.alignItems = "center";
a.style.justifyContent = "center";
a.style.width = '132px';
a.style.height = '57px';
a.style.color = 'white';
a.style.backgroundColor = '#3a67ea';

//preview 복제 및 해당되는 링크 추가
for (let i = 0; i <= 24; i++) {
    previewcard[i] = a.cloneNode(true);
    previewcard[i].href = news_list_form_href[i];
    previewNews[i] = previewcard[i];

    console.log(previewNews[i]);
}


//마우스 over out 코드
for (let i = 1; i <= 24; i++) {  
    console.log('벌써돌아가는중');
    news_list_form[i].addEventListener('mouseover', (event) => {
        news_list_form[i].replaceChildren(previewNews[i]);
        //만들어논 privew로 교체
        console.log(news_list_form[i]);
        console.log('마우스 온')
    });
    news_list_form[i].addEventListener('mouseout', (event) => {
        news_list_form[i].replaceChildren(news_list_form_link[i]);
        //원래 긁어온 news list form으로 교체
        console.log(news_list_form[i]);
        console.log('마우스다운')
    })
    console.log('ㅌ끄났지롱')
}




function typeSearch(type) {
    let idValue = type
    if (idValue == "news" || idValue == "mediaEdit" ||
        idValue == "entertain" || idValue == "sports" || idValue == "economics") {
        console.log("제대로 선택함")
        fontColor(idValue);
        cardSelect(idValue);

    }
    else {
        console.log("관리자에게 문의하셈")
    }
}

function test(type) {
    if (type == "A") {
        console.log("버튼 A 입니다");
    } else if (type == "B") {
        console.log("버튼 B 입니다");
    } else if (type == "C") {
        console.log("버튼 entertain_list 입니다");
    } else if (type == "D") {
        console.log("버튼 sports_list 입니다");
    } else if (type == "E") {
        console.log("버튼 economics_list 입니다");
    }
}



function fontColor(type) {
    // type.style.color="black"
    // 이게 안되네 ㄷㄷ

    if (type == "news") {
        console.log(news);
        news_news.style.color = "#000000";
        news_mediaEdit.style.color = "#909aab";
        news_entertain.style.color = "#909aab";
        news_sports.style.color = "#909aab";
        news_economics.style.color = "#909aab";
    } else if (type == "mediaEdit") {
        news_news.style.color = "#909aab";
        news_mediaEdit.style.color = "black";
        news_entertain.style.color = "#909aab";
        news_sports.style.color = "#909aab";
        news_economics.style.color = "#909aab";
        console.log(type);
    } else if (type == "entertain") {
        news_news.style.color = "#909aab";
        news_mediaEdit.style.color = "#909aab";
        news_entertain.style.color = "black";
        news_sports.style.color = "#909aab";
        news_economics.style.color = "#909aab";
        console.log(type);
    }
    else if (type == "sports") {
        news_news.style.color = "#909aab";
        news_mediaEdit.style.color = "909aab";
        news_entertain.style.color = "#909aab";
        news_sports.style.color = "black";
        news_economics.style.color = "#909aab";
        console.log(type);
    } else if (type == "economics") {
        news_news.style.color = "#909aab";
        news_mediaEdit.style.color = "909aab";
        news_entertain.style.color = "#909aab";
        news_sports.style.color = "#909aab";
        news_economics.style.color = "black";
        console.log(type);
    }

}

function cardSelect(type) {
    console.log("안뇽");
    console.log(news_list);
    console.log(B);
    console.log(entertain_list);
    console.log(sports_list);
    console.log(economics_list);
    // A.style.pointerEvents="none";
    if (type == "news") {
        news_list.style.pointerEvents = "auto";
        mediaEdit_list.style.pointerEvents = "none";
        entertain_list.style.pointerEvents = "none";
        sports_list.style.pointerEvents = "none";
        economics_list.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "mediaEdit") {
        news_list.style.pointerEvents = "none";
        mediaEdit_list.style.pointerEvents = "auto";
        entertain_list.style.pointerEvents = "none";
        sports_list.style.pointerEvents = "none";
        economics_list.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "entertain") {
        news_list.style.pointerEvents = "none";
        mediaEdit_list.style.pointerEvents = "none";
        entertain_list.style.pointerEvents = "auto";
        sports_list.style.pointerEvents = "none";
        economics_list.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "sports") {
        news_list.style.pointerEvents = "none";
        mediaEdit_list.style.pointerEvents = "none";
        entertain_list.style.pointerEvents = "none";
        sports_list.style.pointerEvents = "auto";
        economics_list.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "economics") {
        news_list.style.pointerEvents = "none";
        mediaEdit_list.style.pointerEvents = "none";
        entertain_list.style.pointerEvents = "none";
        sports_list.style.pointerEvents = "none";
        economics_list.style.pointerEvents = "auto";
        cardDisplay(type);
    }
}
function cardDisplay(type) {
    if (type == "news") {
        news_list.style.display = "block";
        mediaEdit_list.style.display = "none";
        entertain_list.style.display = "none";
        sports_list.style.display = "none";
        economics_list.style.display = "none";

    } else if (type == "mediaEdit") {
        news_list.style.display = "none";
        mediaEdit_list.style.display = "block";
        entertain_list.style.display = "none";
        sports_list.style.display = "none";
        economics_list.style.display = "none";

    } else if (type == "entertain") {
        news_list.style.display = "none";
        mediaEdit_list.style.display = "none";
        entertain_list.style.display = "block";
        sports_list.style.display = "none";
        economics_list.style.display = "none";
    } else if (type == "sports") {
        news_list.style.display = "none";
        mediaEdit_list.style.display = "none";
        entertain_list.style.display = "none";
        sports_list.style.display = "block";
        economics_list.style.display = "none";
    } else if (type == "economics") {
        news_list.style.display = "none";
        mediaEdit_list.style.display = "none";
        entertain_list.style.display = "none";
        sports_list.style.display = "none";
        economics_list.style.display = "block";
    }
}


// cardContent=[];

// const navList = [];

// //각각의 기사를 가지고 온다
// for(let i=1;i<=8;i++){
//     navList[i] = document.getElementById(`nav${i}`);
//     console.log("스크롤 부분입니다");
//     console.log(navList[i]);
// }

let navList = document.querySelector('.nav_scroll_container');





// 스크롤 자동넘김

const nav_scroll_container = document.querySelector('.nav_scroll_container');
console.log(nav_scroll_container); 

//받은 스크롤값 저장하고 비우고 하기 위해 사용용
let scrollCount = 0;

function autoScroll(value){
    scrollCount += value;
    nav_scroll_container.scrollTop = scrollCount;
/// div한줄 height가 16이기 떄문에 3초당 16씩 내리면 됨
    // if(nav_scroll_container.s)/

    if(scrollCount == 16){
        scrollCount =0; 
        //계속 16height만큼 일정하게 늘어나게 하기위해 원래 가진 스크롤벨류 초기화
        
        //그전 div 복사한것을 마지막 div에 붙여 로테이션 시키기
        console.log(navList.firstElementChild);
        let cloneFirstNav = navList.firstElementChild.cloneNode(true);
        console.log(cloneFirstNav)
        navList.firstElementChild.remove();
        console.log(nav_scroll_container);

        // 
        nav_scroll_container.appendChild(cloneFirstNav);
        console.log(navList.firstElementChild);

    }

}
    setInterval(() => autoScroll(16), 3000);


