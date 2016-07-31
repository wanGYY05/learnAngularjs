/**
 * Created by wangyanyan on 2016/7/31.
 */
var myFil=angular.module('myFilter',[]);

myFil.filter("rJs",function () {
    return function (input) {
        return input.replace(/js/,'javascript');
    }
});
