/*
    Open Weater API を使用して、天気の情報を取得するアプリ
    https://openweathermap.org/api　にアクセスしてサインアップしてapiキーを取得する必要があります
    今回は、Current weather data（https://openweathermap.org/current）　のAPIを使用
    指定した都市の天気データを取得します
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

*/


// requestモジュールを使用する宣言を行います
const request = require('request')
// dotenvモジュールを使用する宣言を行います
const dotenv = require("dotenv").config();

// コマンドラインの引数の都市名の値を変数にセット
const argument = process.argv[2];

const option = {
    url: `http://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
    method : "GET",
    json : true
};


//
// 指定したURLにリクエストを送り、レスポンスを解析する。
// 
request(option, (e, response, body) => {
    if (e) {
        console.error(e);
        
    }
    try {
        //console.log(body);
        console.log(`現在の${argument}の気温は${body.main.temp}度です。`);
     } catch (e) {
         console.error(e);
     }
});


