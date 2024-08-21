let button = document.getElementById("handleSubmit");

button.onclick = async function(e) {
    e.preventDefault(); 

    let nome = document.querySelector('.cadastro .nome').value;
    let sobrenome = document.querySelector('.cadastro .sobrenome').value;
    let nascimento = document.querySelector('.cadastro .nascimento').value;
    let email = document.querySelector('.cadastro .email').value; 
    let celular = document.querySelector('.cadastro .celular').value; 
    let senha = document.querySelector('.cadastro .senha').value;

    let data = {nome, sobrenome, nascimento, email, celular, senha}; 

    console.log("Dados que serão enviados:", data); 

    
    try {
        const response = await fetch('http://localhost:3000/api/user/create', {
            method: "POST", 
            headers: { "Content-Type": "application/json;charset=UTF-8" }, 
            body: JSON.stringify(data) 
        });

        let content = await response.json(); 
        console.log(content)

        if (content.success) {
            alert("Sucesso");
            window.location.href = "../front/login/login.html" 
        } else {
            alert("Não"); 
        }

    } catch (error) {
        console.error("Erro ao enviar a requisição:", error); 
        alert("Erro ao enviar a requisição. Verifique o console para mais detalhes."); 
    }


}; 