# node_postgreSQL

**Formulario de autenticación con Node.js,  PostgreSQL y React**


***Instalaciones***
Intalación de los paquetes de:

  - Postgres
   ```npm i postgres```
   
  - Nodemon en modo developer
  ```npm i nodemon -D ```
  
  - Expres pg
   ```brew install postgres ```
  
  
  *Nota Importante*
    
    Es necario instalar Cors ya que la la app corre por dos puertos diferentes
  - cors
    ```npm i cors ```
  

***Backend*** Node, PostgreSQL
- Se crea una base de datos en postgreSQL 'Usuario' 
    Los códigos del script para ejecutar la creación de la base de datos y la tabla users se encuentra en la ruta src/database/database.sql
- Parcon Node.js que realizar las diferentes  (Create, Read, Update and Delete) CRUD.
- En la Objeto Pool tiene los datos de la conexión de la base de datos
- Router se crearon las rutas utilizadas para realizar el llamado del api rest con el parámetro cors

***Frontend***
React/ Hooks

Se encuentra ubicado dentro del mismo repositorio en el proyecto [Frontend](https://github.com/Erica1912/frontend-formulario)
para separar las lógicas, del backend y el frontend





