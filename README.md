# TIC_GRUPO_3
 ## Trabalho Interdisciplinar de Computação UNI-FACEF
 #### Grupo composto por: 
 #####  Cassiano Nakaoka - Ciências da Computação
 #####  Lucas Cintra - Engenharia de Software
 #####  Natan Torres - Ciências da Computação
 #####  Wesley Oliveira - Sistemas de Informação

##### Instalação
######  npm install
***ou***
######  yarn install

##### Migrations
##### Criar migration
######  yarn typeorm migration:create -n Create<nomeTabela>
***     ex: yarn typeorm migration:create -n CreateUsuarios.ts***
##### Rodar migration 
######  yarn typeorm migration:run
##### Desfazer migration
######  yarn typeorm migration:revert

##### Rodar a aplicação
######  npm run dev
***ou***
######  yarn dev
 
