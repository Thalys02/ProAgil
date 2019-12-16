var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from "./currency-mask.directive";
import { CURRENCY_MASK_CONFIG } from "./currency-mask.config";
var NgxCurrencyModule = /** @class */ (function () {
    function NgxCurrencyModule() {
    }
    NgxCurrencyModule_1 = NgxCurrencyModule;
    NgxCurrencyModule.forRoot = function (config) {
        return {
            ngModule: NgxCurrencyModule_1,
            providers: [{
                    provide: CURRENCY_MASK_CONFIG,
                    useValue: config,
                }]
        };
    };
    var NgxCurrencyModule_1;
    NgxCurrencyModule = NgxCurrencyModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [CurrencyMaskDirective],
            exports: [CurrencyMaskDirective]
        })
    ], NgxCurrencyModule);
    return NgxCurrencyModule;
}());
export { NgxCurrencyModule };
//# sourceMappingURL=currency-mask.module.js.map