# Transcendance

## SUBJECT

Ce projet consiste à créer un site web pour participer à une compétition du célèbre jeu Pong !

Fait a 4, nous avons tous pris en main differents aspects du projet afin de le mener jusqu'au bout.

## DEV USE

Pour un acces classique : **make**

Pour un acces avec visualisation de bdd : **make dev**

Acces bdd avec make dev : **http://localhost:5000**

Login pgadmin : **admin@admin.com**

MDP admin : **root**

Acceder a la page d'accueil via : **https://localhost:3000**

Nettoyer tout les docker : **./clear.sh**

### PGADMIN4

Pgadmin est une interface graphique pour postgresql. Vous pourrez donc avoir une vision generale de votre db sans vous connecter au docker de la db et s'emmerder avec des commandes SQL

Pour se connecter : 
- **login** = admin@admin.com
- **mdp** = root

Une fois connecter derouler l'arbre de **Servers**

Si il n'y que **Database** qui apparait (ce qui sera surement le cas), faites un clic droit sur **Servers** -> **Nouveau** -> **Serveur**

Une page de config s'ouvre. Dans **General** -> **Nom**, choisissez un nom.

Aller dans **Connexion** : 
- **Nom d'hote** = db
- **Port** = 5432
- **Nom utilisateur** = theuser
- **Mot de passe** = abc

Vous avez maintenant acces a la db sous le nom que vous lui avez donne. C'est un beau bordel alors on va surtout s'interresser au Tables de le db.

Pour y acceder : **Base de donnees** -> **mydb** -> **Schemas** -> **public** -> **Tables**

Tous les modeles que nous allons creer via Django seront visible de la.

### MAJEUR

- [x] Backend Django
- [x] Gestion utilisateur standard (WIP)
- [x] Authentification a distance
- [x] 2FA (TODO)
- [x] 3D
- [x] BOT 

### MINEUR

- [x] BDD Postgre
- [x] Frontend Bootstrap

### TOTAL POINTS

7 **/ 7**