let id = 0;
let advice = "";

function roll() {
const apiUrl = "https://api.adviceslip.com/advice";

fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error('Resposne Failed')
    }
    return response.json()
}).then(data => {
    id = data["slip"]["id"]
    advice = data["slip"]["advice"]
    document.querySelector("#id").innerHTML = id;
    document.querySelector("#advice").innerHTML = advice;
}).catch(error => {
    console.log("Error:", error)
})
}