FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run db:migrate

EXPOSE 8000

# Comando para ejecutar la aplicación
# CMD ["npm", "run", "start"]
