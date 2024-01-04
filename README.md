# AuthApp
Esta aplicación consiste en consumir el sistema de autenticación (back-end) personalizado que está en este [repositorio de GitHub](https://github.com/AminEl93/NestBackend) y poder visualizar un proceso de autenticación real con una pantalla de login y de registro de usuarios. La aplicación se ha generado con la versión 16.0.0 de [Angular CLI](https://github.com/angular/angular-cli), con la versión 18.16.0 de NodeJS y con la versión 9.6.6 de npm.

El back-end mencionado anteriormente está hecho con [NestJS](https://nestjs.com), [MongoDB](https://www.mongodb.com/es) y [Docker](https://www.docker.com). Siempre ha de estar corriendo paralelamente para que, de esa forma, se puedan ver y obtener todos los usuarios registrados.

## Ejecutar en local y en producción
En los pasos a seguir dentro del [README](https://github.com/AminEl93/NestBackend/blob/master/README.md) del backend asociado a esta aplicación, un paso dice que la cadena de conexión con MongoDB está creada en una variable de entorno dentro un archivo llamado `.env`, pero hay que copiar el archivo `.env.template` de este repositorio y renombrarlo a `.env`. En ese archivo, hay una variable de entorno llamada `MONGO_URI=mongodb://localhost:27017/mean-db` que sirve para conectarse de manera local con la base de datos de MongoDB.

Para conectarse a la base de datos en modo producción, se ha utilizado la plataforma [Railway](https://railway.app) y la variable `MONGO_URI` se deberá cambiar a una URI correspondiente. Actualmente la aplicación solo se puede ejecutar en producción, ya que está configurada para ser ejecutada en ese modo (está subida a la plataforma de [Netlify](https://www.netlify.com)). Para usarla, hay que acceder a este [enlace](https://auth-app-amin.netlify.app). Si se quiere usar la aplicación en **local**, hay que hacer una serie de cambios en los siguientes archivos:

* En el archivo `environtments.ts`, cambiar `baseUrl: 'https://nest-backend-amin.up.railway.app'` por `baseUrl: 'http://localhost:3000'`.

* En el archivo `app.module.ts` del [backend relacionado](https://github.com/AminEl93/NestBackend), quitar la línea `{dbName: process.env.MONGO_DB_NAME}` de los imports.

* En el archivo `.env` del [backend relacionado](https://github.com/AminEl93/NestBackend), cambiar la variable de entorno `MONGO_URI` por esta: `MONGO_URI=mongodb://localhost:27017/mean-db`.
