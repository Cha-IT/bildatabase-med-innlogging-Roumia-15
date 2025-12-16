async function loggut() {
    const response = await fetch("/logout", {
        method: "POST"
    });

    if(response.ok){
        alert("Du er logget ut");
        window.location.href = "/login";
    }
    else {
        alert("Noe gikk galt");
    }
    }