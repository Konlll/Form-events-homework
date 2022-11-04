// Lekéri az összes input tag-et -> ez egy 
let inputs = document.querySelectorAll("input")

// Végigiterálva az inputokon, csak egyszer kell megadjuk a "focus" és a "blur" eventeket.
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "rgb(170, 200, 255)"
    })
    input.addEventListener("blur", () => {
        input.style.backgroundColor = "#fff"
    })
})

// Lekéri az inputok értékeit. A 16-os sor hosszabb magyarázatot igényel, így nem írom le
const getAllInputValues = (inputs) => {
    return Array.from(inputs).map(input => input.value)
}

// A button elemnek adunk egy click eventet, ami aztán kiíratja az értékeket.
document.querySelector("#submit").addEventListener("click", e => {
    // Megszakítja a "submit" eventet
    e.preventDefault()
    
    let values = getAllInputValues(inputs)
    document.querySelector("#output-name").innerHTML = values[0]
    document.querySelector("#output-address").innerHTML = values[1]
    document.querySelector("#output-phone").innerHTML = values[2]
})