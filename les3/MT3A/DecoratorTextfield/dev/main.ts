window.addEventListener("load", function () {

    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");

    let text = form.search.value;

    // Textobject
    let textObject = new TextObject(text);

    if (form.hodor.checked) {
        console.log("Hodor hodor hodor hodor");
        textObject = new Hodor(textObject);
    }

    if (form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");
        textObject = new LowerCase(textObject);
    }

    if (form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        textObject = new Summary(textObject);
    }

    if (form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        textObject = new Uppercase(textObject);
    }

    if (form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        textObject = new Reverse(textObject)
    }

    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = textObject.getText();
}