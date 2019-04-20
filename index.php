<html>
    <head>
        <meta charset="UTF-8">
        <title>Campo Minado</title>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
        crossorigin="anonymous"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
    <body>
        <div id="app" style="margin: 20px" class="row">
            <div class="col-sm-12 col-lg-6">
                <h1>Campo Minado</h1>
                <div id="pnConfiguracao">      
                    <div class="row">
                        <div class="col-md-4">
                            <fieldset class="scheduler-border">
                                <legend class="scheduler-border">Tamanho</legend>
                                <input type="radio" value=7 name="rbTamanho" v-model="tamanho">Pequeno (7*7)<br>
                                <input type="radio" value=9 name="rbTamanho" v-model="tamanho">Médio (9*9)<br>
                                <input type="radio" value=11 name="rbTamanho" v-model="tamanho">Grande (11*11)<br><br>
                            </fieldset>   
                        </div>
                        <div class="col-md-4">
                            <fieldset class="scheduler-border">
                                <legend class="scheduler-border">Dificuldade</legend>
                                <input type="radio" value="facil" name="rbDificuldade" v-model="dificuldade">Fácil<br>
                                <input type="radio" value="medio" name="rbDificuldade" v-model="dificuldade">Médio<br>
                                <input type="radio" value="dificil" name="rbDificuldade" v-model="dificuldade">Difícil<br><br>
                            </fieldset>   
                        </div>
                        <div class="col-md-4" style="text-align: center; padding: 50px 0px 50px">
                            <button @click="iniciar" class="btn btn-primary">Novo Jogo</button>   
                        </div>
                    </div>

                    

                </div>
            </div>
            <div class="col-sm-12 col-lg-6" style="float: right !important">
                <table id="pnJogo">
                    <tr v-for="(linha,index) in campo">
                        <td v-for="(coluna,index2) in linha" v-bind:linha='index' v-bind:coluna='index2' @click='verificar(index,index2)'>
                        </td>
                        </div>
                    </tr>
                </table>
            </div>

        </div> 

        <script src="index.js" type="text/javascript"></script>
    </body>
</html>
