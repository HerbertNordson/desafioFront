const elementoTop = document.querySelector(".melhores");
const elementoResultado = document.querySelector(".filmes");
const botoes = document.querySelectorAll(".botoes > button");

function fetchJson(url) {
        return fetch(url).then(resposta => resposta.json());
}

fetchJson ("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    .then(respostaJson => {
        
                for (let i = 0; i < 5; i++) {
                        
                        const li = document.createElement("li");
                        elementoTop.append(li);

                        li.innerHTML = `
                        <div class="card">
                                <div class="filtro"></div>
                                <img class="foto" src="${respostaJson.results[i].poster_path}">
                                <img class="estrela" src="Star 2.png">
                                
                                <div class="titulo-nota">
                                        <div class="titulo">
                                                <h5>${respostaJson.results[i].original_title}</h5>
                                        </div>
                                        <div class="nota">
                                                <img src="Star 1.png">
                                                <span>${respostaJson.results[i].vote_average}</span>
                                        </div>
                                        
                                        <button>Sacola <span>R$ ${respostaJson.results[i].price}</span></button>   
                                        
                                </div>
                        </div>`;
        
        }
        
});

function fetchJson(url) {
        return fetch(url).then(filmes => filmes.json());
}

fetchJson ("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    .then(filmesJson => {

        
                for ( const filme of filmesJson.results) {
                        
                        const li = document.createElement("li");
                        elementoResultado.append(li);

                        li.innerHTML = `
                        <div class="card">
                                <div class="filtro"></div>
                                <img class="foto" src="${filme.poster_path}">
                                <img class="estrela" src="Star 2.png">
                                
                                <div class="titulo-nota">
                                        <div class="titulo">
                                                <h5>${filme.original_title}</h5>
                                        </div>
                                        <div class="nota">
                                                <img src="Star 1.png">
                                                <span>${filme.vote_average}</span>
                                        </div>
                                        
                                        <button>Sacola <span>R$ ${filme.price}</span></button>   
                                        
                                </div>
                        </div>`;
        
        }
        
});

for (const botao of botoes) {
        botao.addEventListener("click", () => {
                alert("Olá!");
        })

};

function inciarContador(minInicial){     
        let minutos = document.getElementById("minuto");     
        let segundos = document.getElementById("segundo");      
        
        minutos.innerHTML = (( minInicial - 1) > 9) ? ('' + minInicial - 1) : ('0' + minInicial - 1);     
        segundos.innerHTML = '59';      
        let m = minInicial - 1;     let s = 59;      
        let contador = setInterval(function () {
                minutos.innerHTML = (m > 9) ? ('' + m) : ('0' + m);         
                segundos.innerHTML = (s > 9) ? ('' + s) : ('0' + s);          
                
                if(s > 0){
                        s -= 1
                }
                else if(s===0 && m > 0){
                        s = 59;
                        m -= 1;         
                }
                else {
                        m = minInicial; 
                        clearInterval(contador);         
                }      
        }, 1000); 
} inciarContador(5);
