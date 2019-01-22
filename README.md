# Mise en place d'un serveur NodeJS

# Pour inialiser le serveur (qui crée le fichier json) : npm init -y
# Installation des modules NodeJs : npm i -s express dotenv ejs path body-parser d3

# Création du fichier .gitignore où on peut lister les fichiers à ne pas push.
On y mets node_modules, .env

# Création du fichier .env (doit être à la racine) qui est un fichier planqué et que l'on met également dans le gitignore

Création des routes pour le front.
En reprenant le même exemple que pour le front, on fait pareil pour d3.routes et on crée une page HTML d3.

#Création du formulaire CVS to json
Modification de la page HTML pour y intégrer un FORM

#Création du fichier app.js
On crée le chargement du DOM où on sélectionne et capte le formulaire.
1) Récupère les données
2) Envoie dans la route
3) Soumission du formulaire

```
name,amount,date
jim,34.0,11/12/2015
carl,120.11,11/12/2015
jim,45.0,12/01/2015
stacy,12.00,01/04/2016
stacy,34.10,01/04/2016
stacy,44.80,01/05/2016
````