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