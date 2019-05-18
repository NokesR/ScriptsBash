TITRE -> INSTALLER JAVA 8 SUR LINUX

INTRODUCTION

---------------------------------

Bienvenue dans ce tutoriel. Nous allons apprendre à installer facilement Java8 sous Linux.


Avant de commencer, vérifiez que vous disposez de ces pré-requis:

Sur votre ordinateur :

le logiciel PuTTY, pour accéder à la console de votre serveur, téléchargeable gratuitement sur https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html .

Sur votre VPS :

Un OS (système) à jour (si cela n'est pas fais, tapez les commandes ci-dessous) :

+ apt-get update
+ apt-get upgrade

---------------------------------

Installation de Java 8

---------------------------------

Etape 1 : Installer Oracle JDK12

+ wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" https://download.oracle.com/otn-pub/java/jdk/12.0.1+12/69cfe15208a647278a19ef0990eea691/jdk-12.0.1_linux-x64_bin.tar.gz

Etape 2 : Extraction

+ tar -zxvf jdk-*

Etape 3 : Installer un nouvel executable

+ update-alternatives --install /usr/bin/java java /usr/jdk-12*/bin/java 3

Etape 4 : Définir le java par défault

+ update-alternatives --config java

Etape 5 : Vérification

+ java -version

Si les messages ci-dessous apparaissent, l'installation est terminée !

java version "12.0.1" 2019-04-16
Java(TM) SE Runtime Environment (build 12.0.1+12)
Java HotSpot(TM) 64-Bit Server VM (build 12.0.1+12, mixed mode, sharing)

---------------------------------

Pour toute question, n'hésitez-pas à contacter l'auteur de ce tutoriel ou le support par ticket.
