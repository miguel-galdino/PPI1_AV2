const API_KEY = '71bfe86022963a173871006733359fa7'; 

async function buscar() {
    let termo = document.getElementById('busca').value;
    let resDiv = document.getElementById('resultado');
    
    if (!termo) { return; }

    resDiv.innerHTML = 'Carregando...';

    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${termo}&language=pt-BR`;
        
        let req = await fetch(url);
        let dados = await req.json();

        resDiv.innerHTML = '';
        
        if(dados.results && dados.results.length > 0) {
            dados.results.forEach(f => {
                let poster = f.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${f.poster_path}` 
                    : 'https://via.placeholder.com/200x300?text=Sem+Imagem';
                let ano = f.release_date ? f.release_date.split('-')[0] : '???';

                resDiv.innerHTML += `
                    <div style="border:1px solid #ccc; margin:10px; padding:10px; display:inline-block; width: 200px; vertical-align: top;">
                        <img src="${poster}" style="width:100%; border-radius:5px;"><br>
                        <strong>${f.title}</strong><br>
                        <span>(${ano})</span>
                    </div>
                `;
            });
        } else {
            resDiv.innerText = 'Nenhum filme encontrado com esse nome.';
        }
    } catch (e) {
        console.error("Erro no sistema:", e);
        resDiv.innerText = 'Erro na conexão com a API.';
    }
}