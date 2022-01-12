# gluehloch | Andre Winkler IT Services

Die Entwicklungsumgebung wird mit den folgenden Befehlen eingerichtet:
```
    npm install
```

Das Deployment wird über das node Skripte `deploy.js` gestartet (FTP Upload):
```
    npm run build-release
    node ./deploy.js
```

Im Projekt Root-Verzeichnis muss zu diesem Zwecke eine `build.properties` Datei angelegt werden.
Diese hat den folgenden Aufbau:
```
ftp.username = <ftp-user>
ftp.password = <ftp-user-password>
ftp.remoteRoot = <host-remote-dir>
```
Als Host-Remote-Dir kommen die folgende Verzeichnisse in Frage:
* Prelive: `/www/andre-winkler-prelive`
* Prod: `/www/andre-winkler`

Bei der Verwendung von Microsofts Visual Code empfiehlt sich die folgende Einstellung
(zu finden in der Datei settings.json im Verzeichnis .vscode):
```
 {
    "typescript.check.workspaceVersion": false,
    "files.exclude": {
        "**/*.js": true,
        "**/*.js.map": true
    }
}
```

Oder noch besser:
```
 {
    "typescript.check.workspaceVersion": false,
    "files.exclude": {
        "**/*.js": {"when": "$(basename).ts"},
        "**/*.js.map": true
    }
}
```

Neuen Rechner eingerichtet: Dondera.

