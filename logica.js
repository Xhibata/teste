const bg = document.querySelector(".background-image");
const card = document.querySelector(".conteudo");

async function BuscarClima() {
    const cidade = document.getElementById("cidade").value;
    const url = `https://goweather.xyz/v2/weather/${cidade}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.message === "NOT_FOUND") {
        document.getElementById("resultado").innerHTML = `
            <p>Cidade não encontrada</p>
        `;
        return;
    }

    document.getElementById("resultado").innerHTML = `
        <h2>Clima em ${cidade}</h2>
        <p>Temperatura: ${dados.temperature}</p>
        <p>Vento: ${dados.wind}</p>
        <p>Descrição: ${dados.description}</p>
    `;
}

document.getElementById("cidade").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        BuscarClima();
    }
});

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    bg.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
});