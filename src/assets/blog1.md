* Listet alle Tags und zeigt das Erstellungsdatum mit an.
    ```
    git log --tags --simplify-by-decoration --pretty="format:%ai %d"
    ```

## TODO: Kopiert aus ZSH GIT-Plugn.
```
gst='git status'
```

    Code-Block nur mit Einrücken:
    glg='git log --stat'
    glgg='git log --graph'
    glgga='git log --graph --decorate --all'
    glgm='git log --graph --max-count=10'
    glgp='git log --stat -p'

```
gke='\gitk --all $(git log -g --pretty=%h)'
glg='git log --stat'
glgg='git log --graph'
glgga='git log --graph --decorate --all'
glgm='git log --graph --max-count=10'
glgp='git log --stat -p'
glo='git log --oneline --decorate'
glod='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'
glods='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'' --date=short'
glog='git log --oneline --decorate --graph'
gloga='git log --oneline --decorate --graph --all'
glol='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'
glola='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --all'
glols='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --stat'
gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
```

## Git Alias
```
git config --global alias.glg 'log --graph --oneline --decorate'
```

### Git stash
```
git stash save "Nachricht"
```
Stashen inklusive aller 'untracked' Dateien:
```
git stash save -u "Nachricht" 
```

### Git checkout
Auschecken eines Tags.
```
git checkout tags/<tag> -b <branch>
```
