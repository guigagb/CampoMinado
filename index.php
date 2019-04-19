<html>
    <head>
        <meta charset="UTF-8">
        <title>Campo Minado</title>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
        crossorigin="anonymous"></script>
        <style>
            td, td{
                border: 1px black solid;
                width: 50px;
                height: 50px;
                text-align: center;
                cursor: pointer;
            }
            .agua{
                background-color: blue;
            }
            .bomba{
                background: url(https://pngimage.net/wp-content/uploads/2018/05/bomba-png-4.png) left top no-repeat !important;
                background-size: cover !important;
            }
        </style>
    </head>
    <body>
        <div class="bomba"></div>
        <table><tr><td class="bomba"></td></tr></table>
        <div id="app" style="width: 600px">
            <h1>Campo Minado</h1>
            <div id="pnConfiguracao">                
                <label>Tamanho: </label>
                <input type="radio" value=7 name="rbTamanho" v-model="tamanho">Pequeno (7*7)
                <input type="radio" value=9 name="rbTamanho" v-model="tamanho">Médio (9*9)
                <input type="radio" value=11 name="rbTamanho" v-model="tamanho">Grande (11*11)<br><br>
                <button @click="iniciar">Novo Jogo</button>
            </div>
            <table id="pnJogo">
                <tr v-for="(linha,index) in campo">
                    <td v-for="(coluna,index2) in linha" v-bind:linha='index' v-bind:coluna='index2' @click='verificar(index,index2)'></td>
                    </div>
                </tr>
            </table>
        </div>

        <script src="index.js" type="text/javascript"></script>
    </body>
</html>
