class XiaoJieJie{
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    saySomething(){
        console.log('小哥哥好！')
    }
}

let xjj: XiaoJieJie = new XiaoJieJie('李瑞轩', 19);
console.log(xjj)
xjj.saySomething()