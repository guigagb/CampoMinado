var vm = new Vue({
    el: '#app',
    data: {
        tamanho: 0,
        campo: {},
        qtdBombas: 0,
        tempLinha: 0,
        tempColuna: 0
    },
    computed: {

    },
    methods: {
        iniciar: function () {

            if (this.tamanho === 0) {
                alert('Escolha um tamanho antes de iniciar um novo jogo.');
                return;
            }

            this.qtdBombas = 10;
            this.tempLinha = 0;
            this.tempColuna = 0;
            this.campo = {};

            $('td').html(' ');
            $('td').removeClass('agua');
            $('td').removeClass('bomba');
            $('td').removeAttr('qtd');

            //criar o campo
            for (var i = 0; i < this.tamanho; i++) {
                if (!this.campo[i]) {
                    this.campo[i] = {};
                }
                for (var j = 0; j < this.tamanho; j++) {
                    if (!this.campo[i][j]) {
                        this.campo[i][j] = {};
                    }
                    this.campo[i][j].bomba = 'N';
                    this.campo[i][j].clicado = 'N';
                    this.campo[i][j].bombaLado = 0;
                }
            }

            let bombasAdicionadas = 0;
            while (bombasAdicionadas < this.qtdBombas) {
                let linha = Math.floor(Math.random() * this.tamanho);
                let coluna = Math.floor(Math.random() * this.tamanho);
                if (this.campo[linha][coluna].bomba === 'N') {

                    this.campo[linha][coluna].bomba = 'S';

                    if (linha > 0 && coluna > 0) {
                        this.campo[linha - 1][coluna - 1].bombaLado++;
                    }
                    if (linha > 0) {
                        this.campo[linha - 1][coluna].bombaLado++;
                    }
                    if (linha > 0 && coluna < this.tamanho - 1) {
                        this.campo[linha - 1][coluna + 1].bombaLado++;
                    }
                    if (coluna > 0) {
                        this.campo[linha][coluna - 1].bombaLado++;
                    }
                    if (coluna < this.tamanho - 1) {
                        this.campo[linha][coluna + 1].bombaLado++;
                    }
                    if (linha < this.tamanho - 1 && coluna > 0) {
                        this.campo[linha + 1][coluna - 1].bombaLado++;
                    }
                    if (linha < this.tamanho - 1) {
                        this.campo[linha + 1][coluna].bombaLado++;
                    }
                    if (linha < this.tamanho - 1 && coluna < this.tamanho - 1) {
                        this.campo[linha + 1][coluna + 1].bombaLado++;
                    }

                    bombasAdicionadas++;
                }
                ;
            }

        },
        varrerAoRedor: function (linha, coluna) {
            obj = {}
            linha = Number(linha);
            coluna = Number(coluna);

            if (linha > 0) {
                if (vm.campo[linha - 1][coluna].clicado === 'N') {
                    obj[2] = {};
                    obj[2].linha = linha - 1;
                    obj[2].coluna = coluna;
                }
            }
            if (coluna > 0) {
                if (vm.campo[linha][coluna - 1].clicado === 'N') {
                    obj[4] = {};
                    obj[4].linha = linha;
                    obj[4].coluna = coluna - 1;
                }
            }
            if (coluna < vm.tamanho - 1) {
                if (vm.campo[linha][coluna + 1].clicado === 'N') {
                    obj[5] = {};
                    obj[5].linha = linha;
                    obj[5].coluna = coluna + 1;
                }
            }
            if (linha < vm.tamanho - 1) {
                if (vm.campo[linha + 1][coluna].clicado === 'N') {
                    obj[7] = {};
                    obj[7].linha = linha + 1;
                    obj[7].coluna = coluna;
                }
            }

            return obj;
        },
        verificar: function(linha,coluna){
            verificar(linha,coluna);
        },
        clicado: function (linha, coluna) {
            if (this.campo[linha][coluna].clicado === 'S') {
                return true;
            } else {
                return false;
            }
        }
    }
});

function verificar(linha, coluna) {
    if (vm.campo[linha][coluna].bomba === 'S') {
        $('[linha=' + linha + '][coluna=' + coluna + ']').addClass('bomba');
        setTimeout(1000);
        alert('Você perdeu!');
        return false;
    } else {
        if (vm.campo[linha][coluna].clicado === 'S') {
            return false;
        } else {
            vm.campo[linha][coluna].clicado = 'S';
            if (vm.campo[linha][coluna].bombaLado === 0) {
                $('[linha=' + linha + '][coluna=' + coluna + ']').addClass('agua');
                var obj = vm.varrerAoRedor(linha, coluna);
                if (obj) {
                    $.each(obj, function (key, value) {
                        return verificar(value.linha, value.coluna);
                    });
                }
            } else {
                $('[linha=' + linha + '][coluna=' + coluna + ']').html(vm.campo[linha][coluna].bombaLado);
            }
        }
    }
}