O Plugin
----------------------------------

Este plugin foi criado com o objetivo de transformar os *select fields* em componentes de interface (*User Interface*) mais atraentes.

Quase sempre que precisavamos customizar a aparência de uma campo *select* criavamos regras CSS para esconder o campo *select* e apresentar uma imagem no local, quando o usuário clicasse na imagem (através de javascript), as opções do *select* eram exibidas.

Esse foi o motivo que nos inspirou a desenvolver este plugin.

Se você não quer escrever uma linha sequer de *CSS* para utilizar este *plugin*, basta utilizar o **Twitter Bootstrap** em conjunto com este script.

Dependências
========================

Este plugin depende da biblioteca *jQuery*. Afim de compatibilizar este plugin com o maior números de navegadores possível, ele foi desenvolvido utilizando a versão *1.9* do *jQuery*.

Instalação
========================

## Incluindo o Script ##

Na seção *head* do seu documento adicione a linha abaixo:

	<script type="text/javascript" src="../jquery.cekurteSelect.js"></script>


### Notas:

O atributo *src* (apresentado no código *html* acima), deverá apontar para a localização onde se encontra o script **jquery.cekurteSelect.js**.

## Criando um select ##

Considerando que você já tenha adicionado um campo *select* no documento *html*, semelhante com este:

	<select id="select1" name="select1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
    </select>

Crie um arquivo Javascript e adicione o código abaixo, pois é desta forma que você irá inicializar o plugin:

	$('#select1').cekurteSelect();

## Parâmetros de Inicialização ##

Você poderá adicionar os seguintes parâmetros durante a inicialização do plugin, os valores apresentados abaixo são os valores *default*:

	$('#select1').cekurteSelect({
		'debug'					: false,
		'twitterBootstrap'      : true,
		'ckSelectClass'         : 'ckSelectCustom',
	    'ckSelectorClass'       : 'ckSelectorCustom',
	    'ckToogleClass'         : 'ckToogleCustom',
	    'ckContainerClass'      : 'ckContainerCustom'
	});

### debug

Recebe um valor booleano, se **true** irá mostrar algumas informações referente a eventos do *plugin*. O valor *default* é **false**.

### twitterBootstrap

Recebe um valor booleano, se **true** irá adicionar aos elementos as classes do Twitter Bootstrap. O valor *default* é **true**.

### ckSelectClass

Modifica o nome da classe que envolve os elementos html. O valor *default* é *ckSelectCustom*.

### ckSelectorClass

Modifica o nome da classe que envolve a opção escolhida pelo usuário. O valor *default* é *ckSelectorCustom*.

### ckToogleClass

Modifica o nome da classe responsável por exibir um botão indicando um menu de *dropdown*. O valor *default* é *ckToogleCustom*.

### ckContainerClass

Modifica o nome da classe do elemento **ul**. O valor *default* é *ckContainerCustom*.

## Eventos ##

Através os eventos você poderá capturar o valor do *select* por exemplo, **antes** (*before*) ou **depois** (*after*) de um usuário selecionar um novo valor para o campo *select*.

Os seguintes eventos estão disponíveis:

### beforeInit

Disparado **antes** do carregamento das opções (elementos *option*) do *select*.

### afterInit

Disparado **depois** do carregamento das opções (elementos *option*) do *select*.

### beforeOpenSelect

Disparado **antes** do usuário abrir as opções do *select*.

### afterOpenSelect

Disparado **depois** do usuário abrir as opções do *select*.




### beforeChangeSelect

Disparado **antes** do usuário selecionar uma nova opção para o *select*.

### afterChangeSelect

Disparado **depois** do usuário selecionar uma nova opção para o *select*.

### beforeCloseSelect

Disparado **antes** do usuário fechar as opções do *select*.

### afterCloseSelect

Disparado **depois** do usuário fechar as opções do *select*.

Exemplos
========================
Você poderá encontrar exemplos dentro da pasta **demo** presente neste repositório.

Demostração
========================
Se você deseja ver este *plugin* em ação, então, acesse: [http://cekurtesistemas.github.io/JQueryCekurteSelect/](http://cekurtesistemas.github.io/JQueryCekurteSelect/ "Ver Demonstração").

----------------------------------
Aproveite e faça bom uso deste projeto!

[@CekurteSistemas](http://sistemas.cekurte.com "@CekurteSistemas")