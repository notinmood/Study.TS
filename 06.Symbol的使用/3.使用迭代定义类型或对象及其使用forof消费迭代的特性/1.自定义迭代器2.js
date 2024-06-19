/**
 * @file   : 0..ts
 * @time   : 8:59
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// +--------------------------------------------------------------------------
// |::说明·| 看到next是否想到了es6的一个新玩意儿，即Generator函数。
// |::一一·| 用Generator函数来实现Symbol.iterator接口，事半功倍。
// +--------------------------------------------------------------------------
var myObject = {};
myObject[Symbol.iterator] = function () {
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _e.sent();
                return [4 /*yield*/, 2];
            case 2:
                _e.sent();
                return [4 /*yield*/, 3];
            case 3:
                _e.sent();
                return [2 /*return*/];
        }
    });
};
var temp = myObject[Symbol.iterator]();
console.log(temp);
var nextNode = temp.next();
console.log(typeof nextNode); //object
console.log(nextNode); //{ value: 1, done: false }
console.log(nextNode.value); //1
console.log(temp.next()); //{ value: 2, done: false }
// // 以下代码会报错
// for (const myObjectElement of myObject) {
//     console.log(myObjectElement);
// }
console.log('─────────────────────────────────────');
for (var myObjectKey in myObject) {
    console.log("-- ".concat(myObjectKey, " \u5BF9\u5E94\u7684\u503C\u4E3A ").concat(myObject[myObjectKey]));
}
