namespace shuaiGe {
    export class DeHua {
        public name: string = '刘德华'

        talk() {
            console.log('我是大帅哥刘德华！')
        }
    }
}
namespace baJie {
    export class DeHua {
        public name: string = '马德华'

        talk() {
            console.log('我是二师兄马德华！')
        }
    }
}
let dehua1: shuaiGe.DeHua = new shuaiGe.DeHua();
let dehua2: baJie.DeHua = new baJie.DeHua();
dehua1.talk();
dehua2.talk();
