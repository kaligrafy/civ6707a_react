# CIV6707a Exemple React

* Cloner le repository:
  * ```git clone https://github.com/kaligrafy/civ6707a_react```
* Installer les modules via yarn:
  * ```yarn install```
* Créer un fichier .env et y ajouter MAPBOX_ACCESS_TOKEN=VOTRE_CLE_MAPBOX
* Démarrer webpack pour générer le fichier js compatible avec tous les navigateurs
  * ```yarn webpack```

* Ouvrir un second terminal et démarrer le serveur json:
  * ```yarn json-server data.json```

* Ouvrir le fichier /dist/index.html dans Chrome ou Firefox

À chaque modification du code, refaire une mise à jour via webpack:
  * ```yarn webpack```
  * Rafraîchir la page dans le navigateur
