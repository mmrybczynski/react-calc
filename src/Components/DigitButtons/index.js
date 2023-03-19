const DigitButtons = (props) => {

    const {updateCalc} = props;

    const digits = [];
    
    for(let i=1;i<10;i++){
        digits.push(
            <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
        )
    }
    return digits;
}
export default DigitButtons;