import {Sequelize} from 'sequelize';



const db = new Sequelize('prueba','root','',{host:'localhost', dialect:'mariadb'});



export default db;
  