<div class="container" ng-init="init()">
    <h4>Bem Vindo!</h4>
    <div class="row">
        <div class="col s3">
            <p>
            Nós somos uma empresa que comercializa equipamentos para computadores em geral. 
            Temos equipamentos para sua casa e sua empresa. Entre em contato conosco para as melhores condições do mercado.
            </p>
        </div>
        <div class="col s9">
            <div class="row">
                <div class="col s6" ng-repeat="c in listaCategorias">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="{{c.imagem}}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">{{c.nome}}<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Ver produtos</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">{{p.nome}}<i class="material-icons right">close</i></span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
