# gluehloch

Die Entwicklungsumgebung wird mit den folgenden Befehlen eingerichtet:

    npm install
    bower install

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