## Szkielet aplikacji Angular2

Kurs internetowy dla zielonych programistów we framework'u Angular 2, 
przeprowadzany jest darmowo na stronie internetowej. Kurs zawiera elementy ze znanych narzêdzi typu, gulp, bower, jspm.
[http://nepras.pl](http://nepras.pl)

### Wymagania
Do poprawnego korzystania z projektu w systemie Windows, konieczne jest zainstalowanie dwóch programów.

- nodeJS
- Git

### Instalacja
Celem rozpoczêcia korzystania z projektu pobranego z tego repozytorium, wykonujemy nastêpuj¹ce czynnoœci.

- klonujemy repozytorium na dysk
~~~
git clone https://github.com/nepras/angular2_001_basic.git master
~~~
- instalujemy oprogramowanie globalne:
~~~
npm install -g gulp
npm install -g jspm
npm install -g bower
~~~
- instalujemy oprogramowanie i narzêdzia lokalne, bêd¹c w g³ównym folderze projektu
~~~
npm install
jspm install
bower install
~~~

### Uruchomienie
G³ówny plik uruchamiaj¹cy projekt jest w folderze src\index.html.

Projekt uruchamiamy wykonuj¹c polecenie z g³ównego folderu w wierszu poleceñ
~~~
http-server ./src
~~~
Przechodzimy pod adres `http://localhost:8080`