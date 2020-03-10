# image de base
FROM alpine:3.11

# installation de npm
RUN apk add npm

# définition du répertoire de travail
WORKDIR /app

# démarrage de l'application
CMD ["npm", "start"]
