O Projeto
----------------------------------

Este aplicativo tem o objetivo de descriptografar as senhas de uma colunas presente em uma tabela de uma banco de dados MySql.

O aplicativo faz uso da tecnologia *Java* responsável por criptografar e descriptografar as senhas usando o algoritmo **PBEWithMd5AndDes**.

A outra camada foi desenvolvida em *PHP* e utiliza o framework *Symfony 2*. Este por sua vez, realiza a busca em uma tabela no banco de dados nomeada **CENTRAL_LOGIN** e percorre as seguintes colunas **ID**, **SEQDIGITAL** e **LOGIN**, sendo que, para cada linha de um registro, o PHP chama o pacote *com.cekurte.PBEWithMd5AndDes()* da camada Java para quebrar a senha. Após, quebrar todas as senhas o resultado é exibido em uma aplicação Web que inclui paginação de resultados. O visual do sistema web é baseado no Twitter Bootstrap.

### Notas:

A classe *com.cekurte.PBEWithMd5AndDes()* está presente dentro do pacote *CekurteCipher.jar*.

O sistema web escrito em *PHP* se comunica com a tecnologia *Java* através de um projeto nomeado *JavaBridge*.

Requisitos de Instalação
----------------------------------

Requisitos da instalação:

- Apache 2.2.x
- PHP 5.3.5+
- Mysql 5.5.x
- Java JRE 1.7.x

Gerenciando as dependências do Projeto
----------------------------------

Assumimos que você já possua o composer.

### Instalando/Atualizando (*vendors* ou *bibliotecas de terceiros*)

Entre no diretório raiz do projeto e execute:

    php composer.phar install

### Verificando as configurações do sistema (*app/check.php*)

Antes de iniciar a codificação, verifique se a sua configuração de ambiente atende aos requisitos do Symfony 2 executando o seguinte comando no diretório root do projeto:

    php app/check.php

Instalação
========================

## Virtual Host do Apache ##

	<VirtualHost *:80>
	    DocumentRoot /Library/WebServer/Documents/pbewithmd5anddes/web
	    ServerName cekurte.pwd.local
	
	    <Directory /Library/WebServer/Documents/pbewithmd5anddes/web>
	        Options All
	        Order allow,deny
	        AllowOverride None
	        Allow from all
	        RewriteEngine On
	        RewriteCond %{REQUEST_FILENAME} !-f
	        RewriteRule ^(.*)$ app_dev.php [QSA,L]
	    </Directory>
	</VirtualHost>

### Notas:

As variáveis *DocumentRoot* e *Directory* deverão apontar para o diretório web do Symfony em sua máquina. Por exemplo, no xampp (em ambientes windows) o path poderia ser:

*C:\xampp\htdocs\softgestao\web*

### Observações:

Também é necessário adicionar uma entrada no arquivo hosts, no Windows esse arquivo fica localizado em: 

*C:\Windows\System32\drivers\etc*

Enquanto que, no Mac OSX e distribuições Linux o arquivo fica localizado em: 

*/etc/hosts*

Adicione a seguinte linha no final deste arquivo:

	127.0.0.1 cekurte.pwd.local

## PHP.ini ##

Você deve editar uma diretiva do arquivo de configuração do interpretador PHP, no arquivo **php.ini**. Habilite a seguinte diretiva:

	allow_url_include = On

## Variáveis de Ambiente PATH ##

Adicione ao *PATH* do sistema operacional o diretório do **PHP**, o gerenciador de dependências **Composer** e o **Java**.

## JavaBridge ##

Copie os arquivos **JavaBridge.jar** e **CekurteCipher.jar** para o diretório **bin** presente na raiz do projeto, executando os comandos abaixo:

	cp ./docs/JavaBridge.jar ./bin/
	cp ./docs/CekurteCipher.jar ./bin/

## Instalando o banco de dados ##

Execute os comandos abaixo na raiz do projeto.

	php app/console doctrine:database:create
	php app/console doctrine:schema:create

## Paginação ##

Se você quiser modificar número de registros exibidos por página no aplicativo web, poderá simplesmente editar o arquivo *app/config/config.yml*. O valor *default* é dez.
	
	paginator_results_per_page: 10

Executando o Projeto
----------------------------------

Entre no diretório raiz do projeto e execute o pacote java com o seguinte comando:

	java -jar bin/JavaBridge.jar

Um *launcher* será exibido apenas clique no botão OK. Isto irá criar um recurso no servidor web no *localhost* na porta **8080**.

Após realizar os ajustes acima, você poderá acessar o projeto através do seu navegador, digitando a seguinte URL:

	http://cekurte.pwd.local

A aplicação será exibida apresentando as seguintes colunas.

- ID
- Usuário
- Senha criptografada em (*PBEWithMd5AndDes*)
- Senha descriptografada (*PBEWithMd5AndDes*)

----------------------------------
Aproveite e faça bom uso deste projeto!

[@CekurteSistemas](http://sistemas.cekurte.com "@CekurteSistemas")