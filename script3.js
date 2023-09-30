let celsius = document.getElementById('celsius')
let farenheit = document.getElementById('farenheit')

celsius.oninput = () => {
    let output1 = (parseFloat(celsius.value)*9)/5 + 32;
    let output2 = (parseFloat(celsius.value)+273);
    farenheit.value = parseFloat(output1.toFixed(2))
    kelvin.value=parseFloat(output2.toFixed(2))
};
 
farenheit.oninput = () => {
    let output = (parseFloat(farenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2))
    kelvin.value=parseFloat((output + 273).toFixed(2))
};

kelvin.oninput=()=>{
    let output1 = ( parseFloat(kelvin.value)-273)
    let output2 =(parseFloat(output1)*9)/5 + 32;
    celsius.value = parseFloat(output1.toFixed(2))
    farenheit.value = parseFloat(output2.toFixed(2))
};
