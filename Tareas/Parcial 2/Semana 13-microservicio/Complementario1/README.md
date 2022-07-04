Primero se debe crear el package.json en la carpeta principal con el comando "npm init -y".

Luego procedemos a instalas 2 modulos en la carpeta principal con el siguiente comando "npm i express mongoose".

Nota: tener instalado docker y su extención en Visual Studio Code

El archivo denominado como "docker-compose.yml" nos permitira componer distintos contenedores o imagenes para la realización de conecciones, o basicamente creara todo lo que necesita la aplicación para funcionar.


Para instalarse docker compose se debe de ejecutar el siguiente comando en el powershell en caso para windows  "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12", luego nos pide instalar una versión actaul con el siguiente comando "Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\Docker\docker-compose.exe". Una vez ya instado para comprobar si se instalo ejecutamos "docker-compose --version".

Para generar el proyecto se escribe el siguiente comando "docker-compose build".

Para iniciar el servicio ejecutamos el comando "docker-compose up".

Para detener los servicios ejecutamos el comando "docker-compose stop".