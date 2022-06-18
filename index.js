const imagem = document.querySelector('img');
const canvas = document.querySelector('canvas');
canvas.width = imagem.width;
canvas.height = imagem.height;
const ctx = canvas.getContext('2d');
const TAMANHO_ESTAMPA = 100;
const MARGEM_ESTAMPA_X = imagem.width - TAMANHO_ESTAMPA - 10;
const MARGEM_ESTAMPA_Y = imagem.height - TAMANHO_ESTAMPA - 10;

ctx.drawImage(imagem, 0, 0);
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fillRect(MARGEM_ESTAMPA_X, MARGEM_ESTAMPA_Y, TAMANHO_ESTAMPA, TAMANHO_ESTAMPA);

function baixarImagem() {
  const link = document.createElement('a');
  link.download = 'teste.png';
  link.href = canvas.toDataURL('images/png');
  link.click();
}

baixarImagem();
