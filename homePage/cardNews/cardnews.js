//클릭이 어디로 되어있나 기준으로 할껀데
// const news
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const E = document.getElementById('E');

const news_news = document.getElementById('news');
const news_mediaEdit = document.getElementById('mediaEdit');
const news_entertain = document.getElementById('entertain');
const news_sports = document.getElementById('sports');
const news_economics = document.getElementById('economics');

function typeSearch(type) {
    let idValue = type
    if (idValue == "news" || idValue == "mediaEdit" ||
    idValue == "entertain"||idValue == "sports" || idValue == "economics") {
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
        console.log("버튼 C 입니다");
    } else if (type == "D") {
        console.log("버튼 D 입니다");
    } else if (type == "E") {
        console.log("버튼 E 입니다");
    }
}



function fontColor(type){
    // type.style.color="black"
    // 이게 안되네 ㄷㄷ

    if (type == "news") {
        console.log(news);
        news_news.style.color="#000000";
        news_mediaEdit.style.color="#909aab";
        news_entertain.style.color="#909aab";
        news_sports.style.color="#909aab";
        news_economics.style.color="#909aab";
    }else if(type =="mediaEdit") {
        news_news.style.color="#909aab";
        news_mediaEdit.style.color="black";
        news_entertain.style.color="#909aab";
        news_sports.style.color="#909aab";
        news_economics.style.color="#909aab";
        console.log(type);
    } else if (type == "entertain"){
        news_news.style.color="#909aab";
        news_mediaEdit.style.color="#909aab";
        news_entertain.style.color="black";
        news_sports.style.color="#909aab";
        news_economics.style.color="#909aab";
        console.log(type);
    }  
    else if(type=="sports") {
        news_news.style.color="#909aab";
        news_mediaEdit.style.color="909aab";
        news_entertain.style.color="#909aab";
        news_sports.style.color="black";
        news_economics.style.color="#909aab";
        console.log(type);
    }else if(type=="economics"){
        news_news.style.color="#909aab";
        news_mediaEdit.style.color="909aab";
        news_entertain.style.color="#909aab";
        news_sports.style.color="#909aab";
        news_economics.style.color="black";
        console.log(type);
    }

}

function cardSelect(type) {
    console.log("안뇽");
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D);
    console.log(E);
    // A.style.pointerEvents="none";
    if (type == "news") {
        A.style.pointerEvents = "auto";
        B.style.pointerEvents = "none";
        C.style.pointerEvents = "none";
        D.style.pointerEvents = "none";
        E.style.pointerEvents = "none";
        cardDisplay(type);
    }else if(type=="mediaEdit") {
        A.style.pointerEvents = "none";
        B.style.pointerEvents = "auto";
        C.style.pointerEvents = "none";
        D.style.pointerEvents = "none";
        E.style.pointerEvents = "none";
        cardDisplay(type);
    }else if (type == "entertain") {
        A.style.pointerEvents = "none";
        B.style.pointerEvents = "none";
        C.style.pointerEvents = "auto";
        D.style.pointerEvents = "none";
        E.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "sports") {
        A.style.pointerEvents = "none";
        B.style.pointerEvents = "none";
        C.style.pointerEvents = "none";
        D.style.pointerEvents = "auto";
        E.style.pointerEvents = "none";
        cardDisplay(type);
    } else if (type == "economics") {
        A.style.pointerEvents = "none";
        B.style.pointerEvents = "none";
        C.style.pointerEvents = "none";
        D.style.pointerEvents = "none";
        E.style.pointerEvents = "auto";
        cardDisplay(type);
    }
}
function cardDisplay(type){
    if (type == "news") {
        A.style.display = "block";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "none";

    } else if(type=="mediaEdit") {
        A.style.display = "none";
        B.style.display = "block";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "none";
       
    }else if (type == "entertain") {
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "block";
        D.style.display = "none";
        E.style.display = "none";
    } else if (type == "sports") {
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "block";
        E.style.display = "none";
    } else if (type == "economics") {
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "block";
    }
}


// cardContent=[];



