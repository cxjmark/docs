# 方法基础
**一、处理正则的方法有：**
+ `test`
+ `match`
+ `exec`
+ `compile`
+ `search`
+ `replace`
+ `split`

**1、`test` 返回 `true/false`**
```js
/a/.test('abc'); // true
```
**2、`match` 返回匹配结果**
```js
'abca'.match(/a/g);  // ["a", "a"]
```
**3、`exec` 相当于`match`的非全局**
```js
/a/g.exec('abca');  // ["a", index: 0, input: "abca"]
```
**4、`compile` 重新编译规则**
```js
var pattern = /a/; 
'abca'.match(pattern);	// ["a", index: 0, input: "abca"]
pattern.compile(/a/g); 
'abca'.match(pattern);  // ["a", "a"]
```
**5、`search` 返回第一次匹配到的索引**
```js
'abca'.search(/(a)/); // 0
```
**`replace` 匹配替换**
```js
'ab'.replace(/a/, 'c'); // cb

'ab'.replace(/(a)(b)/, '$2$1'); // ba
```
**`split` 匹配字符串分隔成数组**
```js
'a,v,c'.split(/,/); // ["a", "v", "c"]
```
**附加：获取匹配字符串，多个规则用括号括起来，`RegExp`是挂在`window`上的一个方法**
```js
/(a)(b)/.test('abc');
RegExp.$1 // a
RegExp.$2 // b
```


