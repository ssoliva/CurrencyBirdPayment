# Desafío Técnico CurrencyBird 

## Sebastián Olivares

\* Se utilizó como supuesto que esta API sería la única utilizando la api socia, por lo que para revisar si una transacción existe simplemente se revisa en la base de datos.

### Instrucciones para levantar el proyecto localmente:
- Previamente: tener instalado docker y docker compose
- Se debe crear un archivo env en la raíz del directorio con la siguiente información:

PORT=8000
DB_USER=postgres
DB_PASSWORD=postgres
DEV_URL=https://prod.developers-test.currencybird.cl/


- Correr el comando docker compose build
- Correr el comando docker compose up

Con eso ya es posible acceder a los endpoints especificados en la documentación.

Esta se puede encontrar en: https://documenter.getpostman.com/view/18306461/2s9YXfai7F

También se puede acceder a la instancia EC2 con la api, pero que tiene problemas de CORS con la api externa por lo que no la utilicé en la documentación. Aún así, dejo el link: http://ec2-44-215-62-136.compute-1.amazonaws.com:8000/payments