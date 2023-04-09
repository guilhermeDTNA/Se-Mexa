Este projeto foi criado para acompanhar o desenvolvimento do Moveit, uma aplicação web desenvolvida na semana NLW promovida pela Rocketseat. 

A aplicação consiste em criar ciclos de 25 minutos em que, ao término, o usuário que está utilizando o dispositivo deverá cumprir um desafio gerado pela aplicação. O desafio é relacionado a fazer determinados exercícios para manter a saúde, mesmo enquanto esteja trabalhando ou estudando. A cada desafio gerado o navegador emite uma notificação e, ao completá-lo, o usuário ganha a pontuação referente ao exercício.

À medida que a pessoa ganha pontos de experiência, ela sobe de nível e suas informações ficam armazenadas nos cookies do navegador, para que seus dados não sejam perdidos ao fechar a aplicação ou desligar a máquina. 

É possível executar a aplicação sem necessitar instalá-la em ambiente local ou fazer qualquer alteração no sistema, basta acessar <a href="https://64330e73dc4a9a62181003fe--teal-praline-ce9d21.netlify.app/">este link</a>. Entretanto, você pode configurar a aplicação em sua máquina, sendo necessário ter o Node e o NPM instalados no sistema operacional. Também será necessária a instalação de pacotes adicionais do NPM, para isso, rode os seguintes comandos:

```console
$ npm install typescript @types/react @types/react-dom @types/node -D
```

Após instalá-los, entre na pasta "Se-mexa" e execute o comando: 

```console

$ npm run dev

```

O sistema poderá ser acessado através do endereço: <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>. <br>
Caso der o erro: "<i>Error: ENOSPC: System limit for number of file watchers reached</i>", digite os seguintes comandos no terminal (funcional para usuários Linux):

```console
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

$ cat /proc/sys/fs/inotify/max_user_watches

```

Após este último, o resultado retornado pelo Sistema Operacional deve ser o seguinte: 524288. Em caso afirmativo, volte para o segundo passo executando a inicialização do projeto.
