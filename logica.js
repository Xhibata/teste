async function BuscarClima() {
    const cidade = document.getElementById("cidade").value;
    const url = `https://goweather.xyz/v2/weather/${cidade}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    document.getElementById("resultado").innerHTML = `
        <h2>Clima em ${cidade}</h2>
        <p>Temperatura: ${dados.temperature}</p>
        <p>Vento: ${dados.wind}</p>
        <p>Descrição: ${dados.description}</p>
    `;
}