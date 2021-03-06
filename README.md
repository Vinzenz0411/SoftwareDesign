# SoftwareDesign - ERCM System

# Anwendung
Die Anwendung läuft momentan über Github-Pages, einen Heroku-Server als Schnittstelle und einer MongoDB Datenbank. Die Website sollte also unter: https://vinzenz0411.github.io/SoftwareDesign/ selbständig funktionieren.
Beim ersten Login kann es einen moment dauern, da der Heroku Server erst gestartet wird wenn eine Anfrage kommt. Danach sollte alles aber recht schnell funktionieren.

Soll sie lokal ausgeführt werden kann der Server mittels node und dem Befehl "npm start" gestartet werden. Davor muss der serverString in der Datei serverCommunication.ts auf den dort kommentierten lokalen String geändert werden.
Soll auch die Datenbank lokal betrieben werden, muss auch noch der Mongo Connection String in der server.ts durch den dort kommentierten lokalen String getauscht werden. Natürlich muss auch noch eine MongoDB auf dem Rechner gestartet sein.

# Design Patterns
1. Das erste verwendete Design Pattern ist die Fabrikmethode. Die Fabrikmethode beschreibt, dass ein Objekt durch den Aufruf einer Methode in einer Klasse anstatt durch den Aufruf eines Konstruktors erzeugt wird. (siehe order.ts)

2. Das zweite verwendete Design Pattern ist ein Singleton. Mithilfe des Singleton kann verhindert werden, dass mehr als eine Instanz einer Klasse erzeugt werden kann. (siehe main.ts)

# Diagramme
Die Diagramme sind im Ordner Diagramme zu finden.

# Unit Test
Unit Test: Der Unit test muss mithilfe dieses Befehls ausgeführt werden:
node --experimental-vm-modules node_modules/jest/bin/jest.js
Jest wird trotz dem Befehl einen Fehler werfen aber die Tests werden korrrekt durchgeführt. Anscheinend liegt es daran, dass im Package.json als "module" es2015 angegeben ist. Wird das auf commonjs geändert verschwinden die Fehler. Daraufhin kann die Website aber nicht mehr mit der Modularisierung umgehen.

# RegEX
Regular Expression: Im gesamt Code lassen sich Regular Expressions finden. Gerade in der Datei formCheck.ts werden gezielt RegEx verwendet um Passwörter, Nutzernamen und  ID's zu überprüfen.