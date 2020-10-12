import { useState } from "react";

export default function saveResults(value?:any) {
    //eslint-disable-next-line
    const [results,setResults] = useState<any>(value)
    return [results,setResults]
}
