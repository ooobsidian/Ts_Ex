class Obsidian {
    public name: string;
    public age: number;
    public skill: string;

    public constructor(name: string, age: number, skill: string) {
        this.name = name
        this.age = age
        this.skill = skill
    }

    public interest() {
        console.log('找小姐姐')
    }
}

let obadias: Obsidian = new Obsidian('李瑞轩', 19, 'coding')
obadias.interest();

class OOObsidian extends Obsidian{
    public xingxiang:string='帅气';
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    public zhuanQian(){
        console.log('一天赚了一个亿')
    }
}
let shuai:OOObsidian=new OOObsidian('儿子',10,'playing')
shuai.interest()
shuai.zhuanQian()

//typescript不能多重继承，注意