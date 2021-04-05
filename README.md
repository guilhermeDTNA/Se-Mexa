Este projeto foi criado para acompanhar o desenvolvimento do Moveit, uma aplicação web desenvolvida na semana NLW promovido pela Rocketseat. 

Para executá-lo é necessário ter o Node e o NPM instalados em sua máquina. Também será necessária a instalação de pacotes adicionais do NPM, para isso, rode os seguintes comandos:

```console
$ npm install typescript @types/react @types/react-dom @types/node -D
```

Após instalá-los, entre na pasta "Se-mexa" e execute o comando: 

```console

$ npm run dev

```

Caso der o erro: "Error: ENOSPC: System limit for number of file watchers reached", digite os seguintes comandos no terminal (funcional para usuários Linux):

```console
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

$ cat /proc/sys/fs/inotify/max_user_watches

```

Após este último, o resultado retornado pelo Sistema Operacional deve ser o seguinte: 524288. Em caso afirmativo, volte para o segundo passo executando a inicialização do projeto.
