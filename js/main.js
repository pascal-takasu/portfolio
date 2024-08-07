// console.log("コンソール出力");
// console.log("コンソール出力2");
// console.log("コンソール出力3");

//変数の宣言
let num = 30;
//変数の出力
console.log(num);

//変数の上書き
num = 50;
//変数の再出力
console.log(num);

//定数の宣言
const MESSAGE = "定数メッセージ";
//定数の出力
console.log(MESSAGE);

//定数の上書き
//MESSAGE = "定数メッセージの上書き";
//定数の出力
console.log(MESSAGE);

//データ型の確認
console.log(typeof 10);
console.log(typeof "こんにちは");
console.log(typeof true);

//関数の定義
function greet(name) {
    console.log(name + "さん、こんにちは");
}

// 関数の呼び出し
greet("山田");
greet("鈴木");

console.log(document.getElementById("menu"));
//document.getElementById("menu").textContent = "MENUの書き換え";

//クリックイベントで呼ばれる関数の定義
function menuClick() {
    document.getElementById("menu").textContent = "クリックされました";
}

//クリックイベント
document.getElementById("menu").onclick = menuClick;

//マウスオーバーイベントで呼ばれる関数の定義
function menuMouseOver() {
    document.getElementById("menu").textContent = "マウスオーバーされました";
}

//マウスオーバーイベント
document.getElementById("menu").onmouseover = menuMouseOver;

//スタイルの操作を行う関数の定義
function headerMouseOver() {
    document.getElementById("header").style.color = "red";
}

//スタイルの操作の呼び出し
document.getElementById("header").onmouseover = headerMouseOver;

//classの追加・削除を行う関数の定義
function headerOnClick() {
    document.getElementById("header").classList.toggle("clicked");
}

//classの追加・削除を行う関数の呼び出し
document.getElementById("header").onclick = headerOnClick;