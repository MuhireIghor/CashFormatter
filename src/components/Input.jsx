import { useState } from "react";
import { formatCurrency } from "../utils";

const Inputs = () => {
    const [value, setValue] = useState(0)



    const handleFormat = () => {
        const nums = formatCurrency(inputVal);
        setValue(nums)
    }

    const [inputVal, setInputVal] = useState(0);
    return (
        <div className="bg-white rounded ">
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="bg-white w-2/3 border" />
            <button onClick={handleFormat}>Format</button>
            <p>{value}</p>

        </div>
    )
}
export default Inputs;