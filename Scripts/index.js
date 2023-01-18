const dombuttonAdd = () => {
    const bt1 = document.createElement("button");
    bt1.innerHTML = "굴리기!";
    bt1.id ="bt1";
    bt1.className="btc";
    document.getElementById("content").append(bt1);
    
    const bt2 = document.createElement("button");
    bt2.innerHTML = "확인";
    bt2.id ="bt2";
    bt2.className="btc";
    document.getElementById("content").append(bt2);
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

    bt1.addEventListener("click",() => {
        s1.innerHTML = `<img src="./img/${domRandom()}.png"/>`
    });

}

//난수생성
const domRandom =() => {
    const random = Math.floor(Math.random ()*6)+1;
    console.log(random);
    return random;
}

//요소보이기
const show =(dspS1, dspS2, dspS3, dspBt1, dspBt2) =>{

    const s1 = document.querySelector("#s1") ;
    const s2 = document.querySelector("#s2") ;
    const s3 = document.querySelector("#s3") ;
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;

    s1.style.display = "dspS1";
    s2.style.display = "dspS2";
    s3.style.display = "dspS3";
    bt1.style.display = "dspBt1";
    bt2.style.display = "dspBt2";
}

//자바 스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded",() => {
    //DOM 요소 생성 
    dombuttonAdd();
    //DOM 요소 수정
    domUpdate();

    show("none","block","none","block","none");

});


