async function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = { email, senha };
    console.log(data);

    const response = await fetch('http://localhost:3000/api/login',{
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" }, 
        body: JSON.stringify(data)
    });

    const results = await response.json();

    if(results.success) {
        alert(results.message);
    } else {
        alert(results.message);
    }
}