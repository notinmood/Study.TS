/**
 * @file   : 1.X.联合类型和交叉类型深入.ts
 * @time   : 6:23
 * @date   : 2022/5/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // +--------------------------------------------------------------------------
    // |::说明·| 1. 通过接口定义两个类型
    // +--------------------------------------------------------------------------
    interface Ant {
        name: string;
        weight: number;
    }

    interface Fly {
        flyHeight: number;
        speed: number;
    }

    // +--------------------------------------------------------------------------
    // |::说明·| 2. 定义两个类型的变量
    // +--------------------------------------------------------------------------
    let ant: Ant = {
        name: "蚂蚁呀嘿",
        weight: 0.2,
    };

    let flyer: Fly = {
        flyHeight: 20,
        speed: 1,
    };

    // +--------------------------------------------------------------------------
    // |::说明·| 3. 使用：定义交叉类型的实例。
    // +--------------------------------------------------------------------------
    let flyAndAnt: Ant & Fly;

    // 少了任何一个属性都会报错
    flyAndAnt = {
        name: "蚂蚁呀嘿",
        weight: 0.2,
        flyHeight: 20,
        speed: 1,
    };

    // 也可以使用分解式语法
    flyAndAnt = { ...ant, ...flyer };

    // +--------------------------------------------------------------------------
    // |::说明·| 4. 定义联合类型的实例。
    // +--------------------------------------------------------------------------
    let flyOrAnt: Ant | Fly;

    // 4.1.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = {
        name: "蚂蚁呀嘿",
        weight: 0.2,
    };

    // 4.2.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = ant;

    // 4.3.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = {
        flyHeight: 20,
        speed: 1,
    };

    // 4.4.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = flyer;

    // 4.5.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = {
        name: "蚂蚁呀嘿",
        weight: 0.2,
        flyHeight: 20,
        speed: 1,
    };

    // 4.6.联合类型 Ant|Fly 的实例可以是 Ant 的实例也可以是 Fly 的实例。
    flyOrAnt = { ...ant, ...flyer };

    // +--------------------------------------------------------------------------
    // |::说明·| 5. 兼容判断
    // +--------------------------------------------------------------------------
    // 5.1 以下演示 可以把 “初始类型” Fly、Ant或者交叉类型 Fly&Ant 的变量赋值给 联合类型的变量
    flyOrAnt = flyer; //Fly 类型的变量可以赋值给 Fly|Ant 类型的变量
    flyOrAnt = ant; //Ant 类型的变量可以赋值给 Fly|Ant 类型的变量
    flyOrAnt = flyAndAnt; //Fly&Ant 类型的变量可以赋值给 Fly|Ant 类型的变量

    // 5.2 以下演示 可以把 交叉类型 Fly&Ant 的变量赋值给 “初始类型” Fly、Ant 类型的变量
    flyer = flyAndAnt;
    ant = flyAndAnt;

    // 5.3 以下演示，不可以将 初始类型Fly、Ant 或者 联合类型 Fly|Ant 的变量，赋值给交叉类型 Fly&Ant 的变量
    // 以下代码无法通过
    //flyAndAnt = flyOrAnt;
    // flyAndAnt= flyer;
    // flyAndAnt = ant;
    // flyer= flyOrAnt;
    // ant = flyOrAnt;

    // +--------------------------------------------------------------------------
    // |::说明·| 兼容性结论：
    // |::一一·| 交叉类型兼容于初始类型，初始类型兼容于 联合类型。
    // |::一一·| 即：交叉类型 ∈ 初始类型 ∈ 联合类型
    // |::一一·| 或者：交叉类型 继承于 初始类型，初始类型 继承于 联合类型
    // |::一一·| (判断依据：属性少的类型属于父类，属性多的类型属于子类)
    // +--------------------------------------------------------------------------
}
