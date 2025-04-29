# GameChaser-API

To Generate new migration script:
npx sequelize-cli migration:generate --name <scriptName>

To run up-script:
npx sequelize-cli db:migrate

To run down-script:
npx sequelize-cli db:migrate:undo

