let button = document.getElementById("handleSubmit");

button.onclick = async function(e) {
    e.preventDefault(); 

    let nome = document.querySelector('.cadastro .nome').value;
    let sobrenome = document.querySelector('.cadastro .sobrenome').value;
    let nascimento = document.querySelector('.cadastro .nascimento').value;
    let email = document.querySelector('.cadastro .email').value; 
    let celular = document.querySelector('.cadastro .celular').value; 
    let senha = document.querySelector('.registro .senha').value;  

    
    let data = { nome, sobrenome, nascimento, email, celular, senha}; 

    console.log("Dados que serão enviados:", data); 

    try {
        
        const response = await fetch('http://localhost:3001/api/store/user', {
            method: "post", 
            headers: { "Content-Type": "application/json;charset=UTF-8" }, 
            body: JSON.stringify(data) 
        });

       
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`); 
        }

        let content = await response.json(); 

        if (content.success) {
            alert("Sucesso"); 
        } else {
            alert("Não"); 
        }

    } catch (error) {
        console.error("Erro ao enviar a requisição:", error); 
        alert("Erro ao enviar a requisição. Verifique o console para mais detalhes."); 
    }
}; 