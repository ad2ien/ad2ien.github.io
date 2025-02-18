+++
title = "✈️ Développeur chez Air France"
[taxonomies]
location=["Toulouse"]
categories=["IT XP"]
tags=["Java", "NodeJS", "Spring", "Springboot", "Electron"]
[extra]
logo = "/images/air-france.jpg"
duration_month = "15"
+++

Cette mission concerne en particulier la gestion de la documentation embarquée dans les avions Air France.

<!-- more -->

## Projet AirCraft Data Connectivity

Solution permettant de monitorer l'état des EFB (Electronic Flight Bag: tablettes tactiles embarquées dans les cockpits) en temps réel. Composé d'un backend Springboot d'un frontend Adngular et d'une partie embarquée en NodeJs, le tout communiquant par websocket.

- Développement
- Configuration de l'environnement d'intégration continue (Bamboo, Nexus)
- Trouver un bon nom de projet : _ACDC_

## Projet LoaderBoard

Client lourd permettant de gérer les différents environnements des "loaders" (PC portable sous Windows 7) servant à la mise à jour des documents et outils sur EFB. Outil destiné aux IT. Techno : framework Electron / Angular.

- Rôle de PO : rédaction de spécifications
- Développement

## Projet ACARSWEB

Projet servant d’interface avec les données ACARS (messages échangés par les avions). Ce projet permet d’exploiter les données de vols.

- Batchs de compilation et parsing de messages ACARS destiné à alimenter un outil de monitoring de consommation de fuel.
- Interface avec KLM (Pays-Bas)
- Développement TDD (Test Driven Development.)

## Projet : AMPHORE

Système de gestion de documents destinés aux EFB pour les différents type d'avion.
Composé d’une application web, de batchs de traitements ainsi que des loaders.

- Redesigns suivant le paradigme DDD Domain Driven Design.
- Recherche d’amélioration des performances.
- Scripts C# pour les loaders. Système de synchronisation automatique d'applications.

## Environnement Technique

- Eclipse, IntelliJ, Webstorm
- Serveurs Linux, et serveurs d’application Tomcat.
- Java J2E, Maven, Spring, Hibernate, Postgres
- Springboot 5,
- Angular 6, typescript
- NodeJs, Websocket
- Junit
- Xsd, xml, jaxB
- Git flow.
- Suite Atlassian : Bamboo, Bitbucket, Jira, Confluence.
