import { useState } from "react";
import { formatCurrency } from "../utils";

const Inputs = () => {
    const [inputVal, setInputVal] = useState(0);
    const [value, setValue] = useState(0);
    const [isDisabled,setIsDisabled] = useState(false);
    const handleFormat = () => {
        const nums = formatCurrency(inputVal);
        setValue(nums)
    }
    const handleInput = (e) => {
        const { value } = e.target;
        const numDots = value.split(".");
        if (numDots.length-1 >1) {
            setIsDisabled(true);
            return;
        }
        setInputVal(value);
    }

    return (
        <div className="bg-white rounded ">
            <input type="text" value={inputVal} onChange={handleInput} className="bg-white w-2/3 border" disabled={isDisabled} />
            <button onClick={handleFormat}>Format</button>
            <p>{value}</p>

        </div>
    )
}
export default Inputs;