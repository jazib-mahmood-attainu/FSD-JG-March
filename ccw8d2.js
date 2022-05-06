const obj1 = {
    a:2,
    b:3
}

const obj2 = {
    a:5,
    b:6
}

function common(x){
    console.log(String(this.a),"+ x =",(this.a+x).toString());
}

f1 = common.bind(obj1)
f1(5)
f2 = common.bind(obj2)
f2(5)
