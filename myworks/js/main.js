


// Swiper設定
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//作品上画像クリック時のモーダルオープン
function modalOpen(id) {
    console.log("modalOpen id="+id);
    document.getElementById("modal").style.display = "block";
    // モーダル上イメージを指定IDの画像に書き換え
    document.getElementById("modal-image").src = "img/"+id+".jpeg";
}

//作品上の画像をクリックしたときにmodalOpen関数を呼び出す
document.getElementById("image_s3").onclick = () => modalOpen("image_s3");
//document.getElementById("image_s3").onclick = modalOpen("image_s3");
document.getElementById("image_s4").onclick = () => modalOpen("image_s4");
document.getElementById("image_s5").onclick = () => modalOpen("image_s5");
document.getElementById("image_s6").onclick = () => modalOpen("image_s6");
document.getElementById("image_s7").onclick = () => modalOpen("image_s7");
document.getElementById("image_s8").onclick = () => modalOpen("image_s8");
document.getElementById("image_s9").onclick = () => modalOpen("image_s9");

//拡大作品モーダルクローズ
function modalClose() {
    document.getElementById("modal").style.display = "none";
}

//モーダル上で戻るボタンをクリックしたときにmodalClose関数を呼び出す
document.getElementById("modal-close").onclick = modalClose;
//無関係なら外枠をクリックしたときにmodalClose関数を呼び出す
document.getElementById("modal").onclick = modalClose;