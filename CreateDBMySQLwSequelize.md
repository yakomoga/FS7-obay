# Here we explain how to create db and models from 0

To create a new model named User please run `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
This will:

- Create a model file user in models folder;
- Create a migration file with name like XXXXXXXXXXXXXX-create-User.js in migrations folder.
if you use buit in migration then you have to run ` npx sequelize-cli db:migrate`
If you want to use sequelize-auto-migration you need to install the latest build stable `yarn add github:scimonster/sequelize-auto-migrations#a063aa6535a3f580623581bf866cef2d609531ba`

# Applying changes in DB models
- If you want to change the model and apply the changes on your db you have to:
- Change the model
- Create migration by running `sequelize migration:create --name MY_CHANGES_NAME`
- Run migration `npx sequelize-cli db:migrate`