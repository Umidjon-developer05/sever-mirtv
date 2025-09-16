"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const module_1 = require("./module");
async function nest() {
    const app = await core_1.NestFactory.create(module_1.AppModule);
    app.enableCors({ origin: '*' });
    await app.setGlobalPrefix('api').listen(process.env.PORT || 8080);
}
nest();
//# sourceMappingURL=main.js.map