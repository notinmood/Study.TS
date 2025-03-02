/**
 * @file   : index.ts
 * @time   : 6:30
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
import { Human } from "../../00.res/Human";

export default {
    name: "Partial的使用",
    description:
        "Partial 就是部分的意思，使用Partial<T>可以将类型 T 的部分成员提取出来，代码就是只使用类型 T 里面的部分成员。",
};

/**
 * Partial<Human>的意思是将 Human 的部分成员提取出来，成为一个新的类型。
 * Partial 就是部分的意思，以下代码就是只使用类型 Human 里面的部分成员。
 * 其实这句话更重要的是要说，新类型的成员不能比 Human 的成员多，只能是他的子集。
 */

type partOfHuman = Partial<Human>;
const myData: partOfHuman = {
    name: "qingdao",
    eat() {},
    /**
     * 因为类型 Human 内没有方法 do()，因此类型 partOfHuman 也不能有 do()。
     */
    // do(){},
};

console.log(myData); //{ name:'qingdao', eat:[Function: eat]}
