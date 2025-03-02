import { Human } from "../00.res/Human";
import { Worker } from "../00.res/Worker";
import { ICanEat } from "../00.res/ICanEat";

const worker = new Worker("zhangsan", "HR");
console.log(worker);
worker.work();

// +--------------------------------------------------------------------------
// |::说明·| 1. 使用 as 运算符进行类型转换
// +--------------------------------------------------------------------------
const human = worker as Human;
human.talk();

// +--------------------------------------------------------------------------
// |::说明·| 2. 使用 <> 进行类型转换
// +--------------------------------------------------------------------------
const eatable = <ICanEat>worker;
eatable.eat();
