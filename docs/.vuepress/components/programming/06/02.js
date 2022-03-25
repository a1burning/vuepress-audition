let str = "https://www.baidu.com/index.php?tn=78040160_5_pg&ch=12#video"
let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
console.log(reg.exec(str));