const CEl = document.getElementById("C-input")
const FEl = document.getElementById("F-input")
const KEl = document.getElementById("K-input")
const containerEl = document.getElementById('container')

function computeTemp(event){
    if (event.target.value ==''){
        alert("Enter at least one temperature value")
    }
    console.log(event.target.name)
    const currentValue = +event.target.value //+ ensures tht the value is a number
    switch (event.target.name) {
        case 'Celsius':
            KEl.value = (currentValue + 273.15).toFixed(2)
            FEl.value = (currentValue *1.8 + 32).toFixed(2)
            break;
        case 'Farenheit':
            CEl.value = ((currentValue -32 )/1.8).toFixed(2)
            KEl.value = (((currentValue-32)/1.8) +273.15).toFixed(2)
            break;
        case "Kelvin":
            CEl.value = (currentValue -273.15).toFixed(2)
            FEl.value = ((currentValue -273.15) *1.8 +32).toFixed(2)
            break;
        default:

            break;
    }
}

CEl.addEventListener('keyup', (e)=>{
    try {
        if(e.key==='Enter'){
            console.log(e.target.value)
        }
    
    } catch (error) {
        
    }
})

function popupMsg() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }