
Guía de Inicio Rápido de Git
Esta documentación proporciona una serie de comandos útiles para configurar un nuevo entorno de trabajo con Git y recordar comandos esenciales al crear repositorios.

Configuración Inicial
Para comenzar a trabajar en un nuevo entorno, es importante establecer algunas configuraciones iniciales. Utilizamos los siguientes comandos:


# Asignar el nombre de usuario
git config --global user.name "Frank robles"

# Asignar el correo electrónico
git config --global user.email "136etc..+frankrobles19@users.noreply.github.com."

# Establecer el editor predeterminado como Visual Studio Code
git config --global core.editor "code --wait"

# Definir la rama principal como 'main'
git config --global init.defaultBranch main
Alias Personalizados
Los alias son atajos útiles para comandos largos y repetitivos. A continuación, configuramos algunos alias para simplificar el uso de Git:


# Alias 'lg' para un formato de registro personalizado
git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green) (%ar)%C(reset)%C(white)%s%C(reset)%C(dim white)-%an%C(reset)%C(bold yellow)%d%C(reset)' --all"

# Alias 'ls5' para mostrar los últimos 5 commits
git config --global alias.ls5 "log --all --decorate --oneline --graph -n 5"

# Alias 'last' para ver el último commit en la rama actual
git config --global alias.last "log -1 HEAD"

# Alias 'ec' para abrir la configuración global en el editor
git config --global alias.ec "config --global -e"

# Alias 'lsFinal' para un historial de commits detallado y coloreado
git config --global alias.lsFinal "log --graph --abbrev-commit --decorate --format=format:'%C(bold yellow)%h%C(reset)%C(red)%d\%C(reset) %C(white)%s%C(reset)%C(blue)\ [%an]%C(reset)' --all"
Iniciar un Proyecto Git
Una vez configuradas las opciones globales, podemos iniciar un nuevo proyecto Git:


cd Proyectos
mkdir MiProyecto
cd ./MiProyecto
git init
Uso de Git
Ahora que el repositorio está inicializado, podemos comenzar a trabajar con Git. Por ejemplo, para crear un nuevo archivo y agregarlo al control de versiones:


touch index.html
git add index.html
git commit -m "Agregar archivo index.html"
Prueba de Alias
Para probar los alias configurados, ejecuta los siguientes comandos en tu terminal:


git lg
git ls5
git last
git ec
git lsFinal
