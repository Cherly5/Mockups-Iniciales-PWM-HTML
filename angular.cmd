# Download and install fnm:
winget install Schniz.fnm

# Download and install Node.js:
fnm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".

# si no se actualiza node
New-Item -ItemType Directory -Path "$HOME\Documents\WindowsPowerShell" -Force
Add-Content -Path $PROFILE -Value "`nfnm env | Out-String | Invoke-Expression"
. $PROFILE
fnm use 22.14.0
node -v

# version de webstorm
webstorm --version

#yo tengo la 2024.3.5
# https://plugins.jetbrains.com/plugin/6971-angular

#luego de instalar el plugin
npm install -g @angular/cli

 # comprobar que esta instalado
ng --version # 19.2.5
ng new angular
# no, CSS, yes, no


cd angular
npm install -g firebase-tools@13.35.1
npm install firebase @angular/fire --legacy-peer-deps


