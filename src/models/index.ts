import { dbConfig } from "@/configs";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.development);

export { Sequelize, sequelize };
