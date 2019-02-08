import * as tslib_2 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'http://localhost:4200';
    }
    ApiService.prototype.getVendors = function () {
        return this.httpClient.get(this.API_URL + "/vendors");
    };
    ApiService.prototype.function = function (exports, require, module, __filename, __dirname) {
        import * as tslib_1 from "tslib";
    };
    ApiService = tslib_2.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_2.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map