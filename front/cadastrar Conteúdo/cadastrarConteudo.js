let button = document.getElementById("handleSubmit");

button.onclick = async function(e) {
    e.preventDefault(); 

    let titulo = document.querySelector('.cadastro .titulo').value;
    let imagem = document.querySelector('.cadastro .imagem').value;
    let texto = document.querySelector('.cadastro .texto').value;

    let data = {titulo, imagem, texto}; 

    console.log("Dados que serão enviados:", data); 

    
    try {
        const response = await fetch('http://localhost:3000/api/conteudo/create', {
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