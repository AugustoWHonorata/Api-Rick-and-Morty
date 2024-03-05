
const card = document.getElementById('card')

botao.addEventListener('click', () => {
    let numeroPersonagem = Math.floor(Math.random() * 826) + 1;

    fetch(`https://rickandmortyapi.com/api/character/${numeroPersonagem}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar dados do personagem');
            }
            return response.json();
        })
        .then(data => {
            card.innerHTML = ''
            const imagemDoPersonagem = document.createElement('img')
            imagemDoPersonagem.src = data.image
            card.appendChild(imagemDoPersonagem)


            const characterList = document.getElementById('characterList');
            characterList.innerHTML = ''; // Limpar a lista antes de adicionar novo item
            
            const nomePersonagem = document.createElement('li');
            nomePersonagem.textContent = `Nome: ${data.name}`;

            const especie = document.createElement('li')
            especie.textContent = `Especie: ${data.species}`

            const status = document.createElement('li')
            status.textContent = `Status: ${data.status}`

            characterList.appendChild(nomePersonagem)
            characterList.appendChild(especie)
            characterList.appendChild(status)
            
        })  
        .catch(error => {
            console.error('Erro:', error);
        });
});