//构造函数声明
let reg1: RegExp = new RegExp('obsidian')
console.log(reg1)
let reg2: RegExp = new RegExp('obsidian', 'gim')
console.log(reg2)

//字面量声明
let reg3: RegExp = /obsidian/i
let reg4: RegExp = /obsidian/gim

//test()
let reg5: RegExp = /obsidian/i
let web: string = 'alphaobsidianlrx.cn'
let result1: boolean = reg1.test(web)
console.log(result1)
//exec()
console.log(reg1.exec(web).index)
