async function loggInn(event) {
    event.preventDefault();

    const epost = document.querySelector("#epost").value;
    const passord = document.querySelector("#passord").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ epost, passord })
    } );

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        window.location.href = "/beskyttet";
    } else {
        alert(result.message);
    }

}