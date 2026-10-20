import Button from "./Button"

const keys = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
    ]

    function Keypad({onPress}) {
      return (
        <div className="keypad">
           {keys.map((key) => (
            <Button key={key} label={key} onPress={onPress} />
           ))}
        </div>
      )
    }
    
    export default Keypad