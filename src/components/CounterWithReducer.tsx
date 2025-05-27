import CounterButton from "./CounterButton.tsx";
// import {useCounter} from "../hooks/useCounter.ts";
import { useCounterWithReducer} from "../hooks/useCounterWithReducer.ts";


const CounterWithReducer = () => {

    // custom hook function
    // const { count, increase, decrease, reset } = useCounter();
    const {count, lastAction,time,  increase, decrease, reset} = useCounterWithReducer();


    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center">
                    <CounterButton onClick={increase} label="increase"/>
                    <CounterButton onClick={decrease} disabled={count ===0} label="decrease"/>
                    <CounterButton onClick={reset} disabled={count ===0} label="reset" addClass="bg-red-400"/>
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"}</strong> at {time || "-"}</p>
        </>
    )


}

export default CounterWithReducer;