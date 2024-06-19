"use strict";
/**
 * @file   : index.ts
 * @time   : 18:07
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
/**
 * 参见：https://blog.csdn.net/Magneto7/article/details/121489097
 */
var MyNameSpace;
(function (MyNameSpace) {
    var Bird = /** @class */ (function () {
        function Bird() {
        }
        Bird.prototype.fly = function () {
            console.log('Bird flying');
        };
        Bird.prototype.layEggs = function () {
            console.log('Bird layEggs');
        };
        return Bird;
    }());
    var Fish = /** @class */ (function () {
        function Fish() {
        }
        Fish.prototype.swim = function () {
            console.log('Fish swimming');
        };
        Fish.prototype.layEggs = function () {
            console.log('Fish layEggs');
        };
        return Fish;
    }());
    var bird = new Bird();
    var fish = new Fish();
    function start(pet) {
        // 调用 layEggs 没问题，因为 Bird 或者 Fish 都有 layEggs 方法
        pet.layEggs();
        //1. 直接调用不存在的方法会报错
        // 会报错：Property 'fly' does not exist on type 'Bird | Fish'
        // pet.fly();
        // 会报错：Property 'swim' does not exist on type 'Bird | Fish'
        // pet.swim();
        //2. 使用之前先判断方法是否存在
        if (pet.fly) {
            pet.fly();
        }
        else if (pet.swim) {
            pet.swim();
        }
        //3. 使用 is 进行类型判断
        function isBird(bird) {
            //if (bird is Bird){}//本行代码说明 is 不能在 if 语句中进行判定
            return !!bird.fly;
        }
        if (isBird(pet)) {
            pet.fly();
        }
        else {
            pet.swim();
        }
    }
    start(bird);
    start(fish);
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
