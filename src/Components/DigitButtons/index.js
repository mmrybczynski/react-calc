const DigitButtons = () => {
    const digits = [];
    for(let i=1;i<10;i++){
        digits.push(
            <button key={i}>{i}</button>
        )
    }
    return digits;
}
export default DigitButtons;