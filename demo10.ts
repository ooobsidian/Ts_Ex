interface Husband {
    sex: string
    interest: string
    maiBaoBao?: boolean
}

let myhusband: Husband = {sex: '男', interest: '摄影,旅游'};
console.log(myhusband)

interface searchMan {
    (source: string, subSource: string): boolean
}

let mySearch: searchMan
mySearch = function (source: string, subSource: string): boolean {
    let flag = source.search(subSource);
    return (flag!=-1)
};
console.log(mySearch('高、富、帅、德','帅'))