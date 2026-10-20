import {useState, useEffect} from 'react'
import Display from './Display';
import Keypad from './Keypad';

function Calculator() {
    const [rumus, setRumus] = useState("")
    const [hasil, setHasil] = useState("")

    useEffect(() => {
        document.title = rumus ? `Kalkulator: ${rumus}` : "Kalkulator"; 
    }, [rumus])

    const handlePress = (value) => {
        if (value === "C") {
            setRumus("")
            setHasil("")
        } else if (value === "=") {
            try {
                setHasil(String(eval(rumus)))
            } catch {
                setHasil("Error")
            }
        } else {
            setRumus(rumus + value)
    }}

  return (
    <div className="calculator">
        <Display rumus={rumus} hasil={hasil} />
        <Keypad onPress={handlePress} />
    </div>
  )
}

export default Calculator