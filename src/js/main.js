

let page_counter = 0;
let json;

fetch("../json/main.json")
        .then(responce => responce.json())
        .then(data => {
            json = data
            update_page();
        })
        .catch(error => console.error(error));


function update_page() {
    if (page_counter == 0) {
        document.getElementById("previous-button").classList.add("hidden");
        document.getElementById("return-button").classList.add("hidden");
        document.getElementById("next-button").classList.remove("hidden");

    } else if (page_counter > 0 && page_counter < json.questions.length-1) {
        document.getElementById("previous-button").classList.remove("hidden");
        document.getElementById("return-button").classList.remove("hidden");
        document.getElementById("next-button").classList.remove("hidden");
    } else {
        document.getElementById("next-button").classList.add("hidden");
    };
    
    if (!(json === undefined)) {
        console.log(page_counter);
        document.getElementById("question").innerHTML = json.questions[page_counter];
        document.getElementById("answer").innerHTML = json.answers[page_counter];
    }
    

}

document.getElementById("next-button").addEventListener("click", () => {

    page_counter++;
    update_page();
})

document.getElementById("previous-button").addEventListener("click", () => {

    page_counter--;
    update_page();

})

document.getElementById("return-button").addEventListener("click", () => {

    page_counter = 0;
    update_page();

})