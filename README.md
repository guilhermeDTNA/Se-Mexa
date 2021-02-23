Este projeto foi criado para acompanhar o desenvolvimento do Moveit, uma aplicação web desenvolvida na semana NLW promovido pela Rocketseat. 

Para executá-lo é necessário ter o Node e o NPM instalados em sua máquina. Após instalá-los, entre na pasta "Se-mexa" e execute o comando: 

npm start

Caso der o erro: "Error: ENOSPC: System limit for number of file watchers reached", digite os seguintes comandos no terminal (funcional para usuários Linux):

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
cat /proc/sys/fs/inotify/max_user_watches

Após este último, o resultado retornado pelo Sistema Operacional deve ser o seguinte: 524288. Em caso afirmativo, volte para o passo inicial executando a inicialização do NPM.
