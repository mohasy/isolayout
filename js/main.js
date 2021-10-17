//load event: dom뿐만 아니라 해당 dom에 수반되는 이미지, 영상 등의 소스파일까지 모두 완료되었을 때 실행되는 입이벤트
window.addEventListener("load", ()=> {
    const grid = new Isotope("section", { //부모 프레임명
        itemSelector: "article", //정렬기능을 적용할 자식요소 이름
        columnWidth: "article", //넓이값을 구할 자식요소 이름
        transitionDuration: "0.5s" // 박스 모션 속도
    });

    const btns = document.querySelectorAll("main ul li");

    for(let el of btns) {
        el.addEventListener("click", e => {
            e.preventDefault();
            let target = e.currentTarget.querySelector("a").getAttribute("herf");
            // console.log(target);
            grid.arrange({filter: target});

            for(let el2 of btns) {
                el2.classList.remove("on");
            }
            el.classList.add("on");
        });
    }
});
