## instalar la los modulos del proyecto para poder ejecutar

Primero se debe crear el package.json en la carpeta principal con el comando "npm init -y".
## Instacion de modulos para el proyecto
Luego procedemos a instalas 2 modulos en la carpeta principal con el siguiente comando 
npm i express mongoose.
## Configuracion con el docker
Nota: tener instalado docker y su extención en Visual Studio Code, si eres de Windows ya no  es necesario instalar docker compose pero si erees usuario de linus debes instalar aparte

El archivo denominado como "docker-compose.yml" nos permitira componer distintos contenedores o imagenes para la realización de conecciones, o basicamente creara todo lo que necesita la aplicación para funcionar.

## Recoemndacion para inconvenientes de con el servicio wls2
Para instalarse docker compose se debe de ejecutar el siguiente comando en el powershell en caso para windows  "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12", luego nos pide instalar una versión actaul con el siguiente comando "Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\Docker\docker-compose.exe". Una vez ya instado para comprobar si se instalo ejecutamos "docker-compose --version".
## Compilacion  en el docker
Para generar el proyecto se escribe el siguiente comando "docker-compose build".
## Ejecucion del proyecto desde el docker
Para iniciar el servicio ejecutamos el comando "docker-compose up".
## Detencion del contenedor del docker
Para detener los servicios ejecutamos el comando "docker-compose stop".
