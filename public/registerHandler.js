async function registrer(event) {
    event.preventDefault();
    console.log("REGISTER FUNKSJON KJØRER");

    const fornavn = document.querySelector("#fornavn").value;
    const epost = document.querySelector("#epost").value;
    const passord = document.querySelector("#passord").value;

    const response = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fornavn, epost, passord })
    });

    const result = await response.json();
    alert(result.message);
}
