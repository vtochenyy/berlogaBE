import { Container } from "inversify";
import { App } from "./app";
import { TYPES } from "./types";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { IConfigService } from "./config/config.service.interface";
import { ConfigService } from "./config/config.service";
import { IDatabaseService } from "./db/databaseService.interface";
import { DatabaseService } from "./db/database.service";
import { BaseRepository } from "./common/base.repository";
import { DishRepository } from "./dish/dish.repository";
import { DishService } from "./dish/dish.service";
import { IControllerInteface } from "./common/controller.inteface";
import { DishController } from "./dish/dish.controller";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import { ExeptionFilter } from "./errors/exeption.filter";
import { IIncomingQueryLogsMiddlewareInterface } from "./middlewares/logs/incomingQueryLogsMiddleware.interface";
import { IncomingQueryLogsMeddlewareService } from "./middlewares/logs/incomingQueryLogsMeddleware.service";
import { IncomingQueryLogsRepository } from "./middlewares/logs/incomingQueryLogs.repository";
import { MenuService } from "./menu/menu.service";
import { MenuController } from "./menu/menu.controller";
import { AdminRepository } from "./admin/admin.repository";
import { AdminService } from "./admin/admin.service";
import { AdminController } from "./admin/admin.controller";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { UserRepository } from "./user/user.repository";
import { MenuRepository } from "./menu/menu.repository";
import { DishToMenuRepository } from "./menu/dishToMenu.repository";
import { BuisnessLunchRepository } from './menu/buisnessLunch.repository';
import { DishToBuisnessLunchRepository } from './menu/dishToBuisnessLunch.repository';
import "reflect-metadata";

const appContainer: Container = new Container();

function bindDeps(): void {
  appContainer.bind<App>(TYPES.Application).to(App).inSingletonScope();
  appContainer.bind<ILogger>(TYPES.Logger).to(LoggerService).inSingletonScope();
  appContainer.bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
  appContainer.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseService).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.DishRepository).to(DishRepository).inSingletonScope();
  appContainer.bind<DishService>(TYPES.DishService).to(DishService).inSingletonScope();
  appContainer.bind<IControllerInteface>(TYPES.DishController).to(DishController).inSingletonScope();
  appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter).inSingletonScope();
  appContainer.bind<IIncomingQueryLogsMiddlewareInterface>(TYPES.IncomingQueryLogsMeddlewareService).to(IncomingQueryLogsMeddlewareService).inRequestScope();
  appContainer.bind<BaseRepository>(TYPES.IncomingQueryLogsRepository).to(IncomingQueryLogsRepository).inSingletonScope();
  appContainer.bind<MenuService>(TYPES.MenuService).to(MenuService).inSingletonScope();
  appContainer.bind<MenuController>(TYPES.MenuController).to(MenuController).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.AdminRepository).to(AdminRepository).inSingletonScope();
  appContainer.bind<AdminService>(TYPES.AdminService).to(AdminService).inSingletonScope();
  appContainer.bind<IControllerInteface>(TYPES.AdminController).to(AdminController).inSingletonScope();
  appContainer.bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope();
  appContainer.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.MenuRepository).to(MenuRepository).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.DishToMenuRepository).to(DishToMenuRepository).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.BuisnessLunchRepository).to(BuisnessLunchRepository).inSingletonScope();
  appContainer.bind<BaseRepository>(TYPES.DishToBuisnessLunchRepository).to(DishToBuisnessLunchRepository).inSingletonScope();
}

bindDeps();
const app: App = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };