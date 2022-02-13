# SoftwareDesign - ERCM System

# Genrelle Informationen
Unit Test: Der Unit test muss mithilfe dieses Befehls ausgeführt werden:
node --experimental-vm-modules node_modules/jest/bin/jest.js
Jest wird trotz dem Befehl einen Fehler werfen aber die Tests werden korrrekt durchgeführt. Anscheinend liegt es daran, dass im Package.json als "module" es2015 angegeben ist. Wird das auf commonjs geändert verschwinden die Fehler. Daraufhin kann die Website aber nicht mehr mit der Modularisierung umgehen.

Anwendung: Die Anwendung läuft momentan über Github-Pages, einen Heroku-Server als Schnittstelle und einer MongoDB Datenbank. Die Website sollte also unter: https://vinzenz0411.github.io/SoftwareDesign/ selbständig funktionieren.

Beim ersten Login kann es einen moment dauern, da der Heroku Server erst gestartet wird wenn eine Anfrage kommt. Danach sollte alles aber recht schnell funktionieren.

Soll sie lokal ausgeführt werden kann der Server mittels node und dem Befehl "npm start" gestartet werden. Davor muss der serverString in der Datei serverCommunication.ts auf den dort kommentierten lokalen String geändert werden.
Soll auch die Datenbank lokal betrieben werden, muss auch noch der Mongo Connection String in der server.ts durch den dort kommentierten lokalen String getauscht werden. Natürlich muss auch noch eine MongoDB auf dem Rechner gestartet sein.

