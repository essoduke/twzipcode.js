# TWzipcode.js
台灣三碼郵遞區號 javascript library

## 參考
https://codepen.io/essoduke/pen/gOjbWaB   
https://code.essoduke.org/twzipcode   

## 安裝
引入
```html
<script src="/path/twzipcode.js"></script>
```
或 npm
```
npm install twzipcode.js
```

## 使用
```html
<!-- 基本 -->
<div class="twzipcode"></div>

<!-- 自訂 -->
<div class="twzipcode">
    <select data-role="county"></select>
    <select data-role="district"></select>
    <input type="text" data-role="zipcode" />
</div>
```
```javascript
// with default selector string ".twzipcode"
let twzipcode = new TWzipcode();
let twzipcode = new TWzipcode({...});

// With custom selector and options
let twzipcode = new TWzipcode('.hello-world', {...});

// With Element or Nodelist
let twzipcode = new TWzipcode(document.querySelectorAll('.hello-world'));
```

## 方法 Methods
### .nth()
若有多組清單，可使用 __.nth()__ 切換
```javascript
let foo = twzipcode.nth(string|number id);

// 取得第 1 組清單
let foo = twzipcode.nth(0);

// 取消指定
let foo = twzipcode.nth();
```

### .get()
取值
```javascript
let result = twzipcode.get();
// output:
{
    "zipcode": "100",
    "county": "臺北市",
    "district": "大安區"
}

// 取特定欄位
let result = twzipcode.get("zipcode");
// output: 106

// 取多個欄位
let result = twzipcode.get(["county", "zipcode"]);
// output:
{
    "county": "臺北市",
    "zipcode": "大安區"
}
```

### .set()
設值
```javascript
// 直接給定郵遞區號
twzipcode.set("106");

// 或給定縣市字串
twzipcode.set({
    "county": "臺北市",
    "district": "大安區"
});
```

### .serialize()
輸出 serialize 字串
```javascript
let querystring = twzipcode.serialize();
// output: county=COUNTY&district=DISTRICT&zipcode=ZIPCODE
```

### .isIslands()
判斷所選值是否為離島 (參見 _options.islands_key_)
```javascript
let is_island = twzipcode.isIslands();
// output true|false

// 或帶入自訂離島
let is_island = twzipcode.isIslands(["桃園市", "大安區"]);
```

### .parseAddress()
解析台灣地址
```javascript
let parse = twzipcode.parseAddress('106臺北市大安區天堂路101巷99號');
// output:
{
    "zipcode": "106",
    "county": "臺北市",
    "district": "大安區"
    ...
}
```

## 參數
```javascript
{
    county: {
        name: "(string) 表單名稱：預設 `county`",
        css: "(string) 樣式名稱",
        label: "(string) 清單預設文字",
        value: "(string) 預設選取值",
        hidden: "(Boolean|String|Array) 要隱藏的縣市，預設 false"
        onChange: "(Function) onChange event"
    },
    district: {
        name: "(string) 表單名稱：預設 `district`",
        css: "(string) 樣式名稱",
        label: "(string) 清單預設文字",
        value: "(string) 預設選取值",
        hidden: "(Boolean|String|Array) 要隱藏的鄉鎮市區，預設 false"
        onChange: "(Function) onChange event"
    },
    zipcode: {
        name: "(string) 表單名稱：預設 `zipcode`",
        css: "(string) 樣式名稱",
        value: "(string) 預設選取值",
        onKeyup: "(Function) onKeyup event"
    },
    combine: "(bool) 是否將由地區號併入鄉鎮市區清單，預設 true",
    islands_key: "(array) 離島名稱，預設 ['綠島鄉', '蘭嶼鄉', '金門縣', '連江縣', '澎湖縣', '琉球鄉']",
    islands_hidden: "(bool) 是否顯示離島，預設 true"
}
```
## 授權
MIT license
