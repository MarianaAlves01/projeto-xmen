// Selecionando e armazenando todos os personagens
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    personagem.classList.add("selecionado");

    // Verificando se já possui um personagem selecionado, se sim, deve-se remover a seleção
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    // Passando o mouse em cima do personagem, deve-se trocar img, nome e descrição

    // 1 - alterar a imagem grande
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `/src/imagens/card-${idPersonagem}.png`;

    // 3 - alterar o nome do personagem grande
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    // 3 - alterar a descrição do personagem grande
    const descPersonagem = document.getElementById("descricao-personagem");
    descPersonagem.innerText = personagem.getAttribute("data-description");
  });
});
