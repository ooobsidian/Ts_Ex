let obsidian: string = '李瑞轩'
let obsidian1: String = new String('alphalrx.cn')
console.log(obsidian.length, obsidian1.length)
//查找字符串 indexOf
let something:string='清晨起来打开窗,心情美美哒，我要出去找小姐姐，心情美美哒'
let xiaojiejie:string='小姐姐'
let meimeida:string='美美哒'
let oobsidian:string='李瑞轩'
console.log(something.indexOf(xiaojiejie))
console.log(something.indexOf(meimeida),something.lastIndexOf(meimeida))
console.log(something.indexOf(oobsidian))
//截取字符串
console.log(something.substring(8))
console.log(something.substring(8,15))
//替换字符串
console.log(something.replace('小姐姐','小哥哥'))