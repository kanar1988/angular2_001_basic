## Szkielet aplikacji Angular2

Kurs internetowy dla zielonych programist�w we framework'u Angular 2, 
przeprowadzany jest darmowo na stronie internetowej. Kurs zawiera elementy ze znanych narz�dzi typu, gulp, bower, jspm.
[http://nepras.pl](http://nepras.pl)

### Wymagania
Do poprawnego korzystania z projektu w systemie Windows, konieczne jest zainstalowanie dw�ch program�w.

- nodeJS
- Git

### Instalacja
Celem rozpocz�cia korzystania z projektu pobranego z tego repozytorium, wykonujemy nast�puj�ce czynno�ci.

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
- instalujemy oprogramowanie i narz�dzia lokalne, b�d�c w g��wnym folderze projektu
~~~
npm install
jspm install
bower install
~~~

### Uruchomienie
G��wny plik uruchamiaj�cy projekt jest w folderze src\index.html.

Projekt uruchamiamy wykonuj�c polecenie z g��wnego folderu w wierszu polece�
~~~
http-server ./src
~~~
Przechodzimy pod adres `http://localhost:8080`