
class MyPromise {
    constructor(){

    }
    static resolve () {
        console.log('resolve');
    }
    then () {
        console.log('reject');
    }

}

var promise = new MyPromise();
MyPromise.resolve();
promise.then();