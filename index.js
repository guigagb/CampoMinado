

var vm = new Vue({
    el: '#app',
    data: {
        tamanho: 0,
        campo: [],
        qtdBombas: 0,
        tempLinha: 0,
        tempColuna: 0,
    },
    methods: {
        iniciar: function () {
            //vetor para preencher os campos com bombas
            this.qtdBombas = 10;
            this.tempLinha = 0;
            this.tempColuna = 0;
            this.campo = []; // não está limpando a matriz
            $('td').removeClass('agua');
            $('td').removeClass('bomba');
            $('td').removeAttr('qtd');
            
            //criar o campo
            for (var i = 0; i < this.tamanho; i++) {
                this.campo[i] = new Array(Number(this.tamanho));
            }

            let bombasAdicionadas = 0;
            while (bombasAdicionadas < this.qtdBombas) {
                let linha = Math.floor(Math.random() * this.tamanho);
                let coluna = Math.floor(Math.random() * this.tamanho);
                if (this.campo[linha][coluna] == undefined) {
                    this.campo[linha][coluna] = 'bomba';
                    bombasAdicionadas++;
                }
                ;
            }

        },
        verificar: function (linha, coluna) {
            if (!this.campo[linha][coluna]) {
                let qtdBombaEmVolta = this.contaBombaEmVolta(linha, coluna);
                if (qtdBombaEmVolta == 0) {
                    $('[linha=' + linha + '][coluna=' + coluna + ']').addClass('agua');
                } else {
                    $('[linha=' + linha + '][coluna=' + coluna + ']').attr('qtd', qtdBombaEmVolta);
                    $('[linha=' + linha + '][coluna=' + coluna + ']').html(qtdBombaEmVolta);
                }
            } else {
                $('[linha=' + linha + '][coluna=' + coluna + ']').addClass('bomba');
                setTimeout(1000);
                alert('Você perdeu!');
            }
        },
        contaBombaEmVolta: function (linha, coluna) {
            let qtd = 0;
            
            if (linha > 0 && coluna > 0) {
                this.campo[linha - 1][coluna - 1] ? qtd++ : '';
            }
            if (linha > 0) {
                this.campo[linha - 1][coluna] ? qtd++ : '';
            }
            if (linha > 0 && coluna < this.tamanho - 1) {
                this.campo[linha - 1][coluna + 1] ? qtd++ : '';
            }
            if (coluna > 0) {
                this.campo[linha][coluna - 1] ? qtd++ : '';
            }
            if (coluna < this.tamanho - 1) {
                this.campo[linha][coluna + 1] ? qtd++ : '';
            }
            if (linha < this.tamanho - 1 && coluna > 0) {
                this.campo[linha + 1][coluna - 1] ? qtd++ : '';
            }
            if (linha < this.tamanho - 1) {
                this.campo[linha + 1][coluna] ? qtd++ : '';
            }
            if (linha < this.tamanho - 1 && coluna < this.tamanho - 1) {
                this.campo[linha + 1][coluna + 1] ? qtd++ : '';
            }
            return qtd;
        }
    }
});