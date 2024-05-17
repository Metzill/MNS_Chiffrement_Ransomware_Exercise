# Projet d'Encryption de Fichier en JavaScript

Ce projet permet d'encrypter un fichier texte en utilisant l'algorithme AES (Advanced Encryption Standard) avec Node.js.

## Prérequis

Avant de pouvoir exécuter ce script, assurez-vous d'avoir les éléments suivants installés sur votre machine :

1. **Node.js** : Vous pouvez télécharger Node.js depuis [nodejs.org](https://nodejs.org/).
2. **Un fichier texte** : Assurez-vous d'avoir un fichier texte nommé `example.txt` dans le même répertoire que le script.

## Instructions

Suivez les étapes ci-dessous pour configurer et exécuter le script d'encryption :

### Étape 1 : Cloner le projet

Clonez ce dépôt ou créez un nouveau répertoire pour votre projet et accédez-y :

```bash
mkdir my-encryption-project
cd my-encryption-project
```
# Projet d'Encryption de Fichier en JavaScript

Ce projet permet d'encrypter un fichier texte en utilisant l'algorithme AES (Advanced Encryption Standard) avec Node.js.

## Prérequis

Avant de pouvoir exécuter ce script, assurez-vous d'avoir les éléments suivants installés sur votre machine :

1. **Node.js** : Vous pouvez télécharger Node.js depuis [nodejs.org](https://nodejs.org/).
2. **Un fichier texte** : Assurez-vous d'avoir un fichier texte nommé `example.txt` dans le même répertoire que le script.

## Instructions

Suivez les étapes ci-dessous pour configurer et exécuter le script d'encryption :

### Étape 1 : Cloner le projet

Clonez ce dépôt ou créez un nouveau répertoire pour votre projet et accédez-y :

```bash
mkdir my-encryption-project
cd my-encryption-project
git clone https://github.com/Metzill/MNS_Chiffrement_Ransomware_Exercise.git
```

### Étape 2 : Initialiser le projet Node.js

Initialisez un nouveau projet Node.js en utilisant npm :

```bash
npm init -y
```

### Étape 4 : Placer le fichier texte

Assurez-vous d'avoir un fichier nommé `example.txt` dans le même répertoire que le fichier `encrypt.js`.

### Étape 5 : Exécuter le script

Exécutez le script en utilisant Node.js :

```bash
node encrypt.js
```

## Résultat

Après avoir exécuté le script, vous verrez un nouveau fichier nommé `example.txt.enc` dans le répertoire. Ce fichier est le résultat de l'encryption du fichier original. La clé d'encryption sera également affichée dans la console.

## Remarques Importantes

Gestion des clés : La clé d'encryption affichée dans la console est essentielle pour déchiffrer le fichier. Assurez-vous de la stocker en toute sécurité.

Gestion de l'IV : Le vecteur d'initialisation (IV) est préfixé au fichier encrypté. Cela garantit que le même IV peut être utilisé lors du déchiffrement pour récupérer les données d'origine.

En suivant ces étapes, vous pourrez encrypter n'importe quel fichier texte en utilisant l'algorithme AES avec Node.js.
