//전역변수
let n;
let score=0;

const dombuttonAdd = () => {
    const bt1 = document.createElement("button");
    bt1.innerHTML = "주사위 선택";
    bt1.id ="bt1";
    bt1.className="btc";
    document.getElementById("s5").append(bt1);
    
    const bt2 = document.createElement("button");
    bt2.innerHTML = "확인";
    bt2.id ="bt2";
    bt2.className="btc";
    document.getElementById("s5").append(bt2);
}

//click 함수
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click",() => {
        div0.innerHTML = `<h1>${bt0.innerHTML}</h1>` ;
        console.log(bt0.innerHTML);
    });

}

const domUpdate = () => {
    //const div1 = document.querySelector("#div1") ;
    //const dise = document.querySelector("#dise");

    bt1.addEventListener("click",domRandom);
    bt2.addEventListener("click",showOk);

}

//난수생성과 show수정
const domRandom =() => {
    n = Math.floor(Math.random ()*6)+1;
    console.log(n);
    show("none","block","none","none","none","block");
}

const showOk =() => {
    const radios = document.querySelectorAll("input[type=radio") ;
    let usern;
    for(let r of radios) {
        if (r.checked)
        {
            //console.log(r);
            usern = parseInt(r.value) ;
            
            break;
        }
    }
    console.log(n,usern);
    //비교 연산자 === : ==와 비교
    if (n === usern) {
        tag = "o"; score++;}
    else tag="x";
    document.querySelector("#s1").innerHTML=`<img src="./img/${n}.png">`
    document.querySelector("#s3").innerHTML=`<img src="./img/${tag}.png">`
    document.querySelector("#s4").innerHTML=`<p>고른 숫자 :${usern} </p>`
    show("block","none","block","block","block","none");
}

//요소보이기
const show =(dspS1, dspS2, dspS3,dspS4, dspBt1, dspBt2,dspS6) =>{

    const s1 = document.querySelector("#s1") ;
    const s2 = document.querySelector("#s2") ;
    const s3 = document.querySelector("#s3") ;
    const s4 = document.querySelector("#s4") ;
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;
    const s6 = document.querySelector("#s6") ;

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    s4.style.display = dspS4;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;
    s6.style.display = dspS6;

    document.querySelector("#s6").innerHTML=`<p>맞춘횟수 :${score} </p>`
}

//자바 스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded",() => {
    
    //DOM 요소 생성 
    dombuttonAdd();
    //DOM 요소 수정
    domUpdate();

    show("none","none","none","none","block","none");
    
});


