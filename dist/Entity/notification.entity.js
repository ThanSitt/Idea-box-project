"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
const general_enum_1 = require("../Enum/general.enum");
const typeorm_1 = require("typeorm");
let Notifications = class Notifications {
};
exports.Notifications = Notifications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Notifications.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Notifications.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "enum", enum: general_enum_1.NotificationType }),
    __metadata("design:type", String)
], Notifications.prototype, "notification_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Notifications.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Notifications.prototype, "subject", void 0);
exports.Notifications = Notifications = __decorate([
    (0, typeorm_1.Entity)("notifications")
], Notifications);
//# sourceMappingURL=notification.entity.js.map