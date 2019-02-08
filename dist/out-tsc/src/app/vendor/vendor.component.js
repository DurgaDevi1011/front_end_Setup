import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
var VendorComponent = /** @class */ (function () {
    function VendorComponent(apiService) {
        this.apiService = apiService;
        this.vendors = [{
                address: "Home N 333 Apartment 1",
                email: "abbess@email.com",
                first_name: "kaya",
                last_name: "Abbes",
                phone: "00121212101"
            },
            {
                address: "Home N 333 Apartment 2",
                email: "111@email.com",
                first_name: "1111",
                last_name: "111",
                phone: "111111"
            }
        ];
    }
    VendorComponent.prototype.ngOnInit = function () {
        this.getVendors();
    };
    VendorComponent.prototype.getVendors = function () {
        var _this = this;
        this.apiService.getVendors().subscribe(function (data) {
            _this.vendors = data;
            console.log(_this.vendors);
        });
    };
    VendorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-vendor',
            templateUrl: './vendor.component.html',
            styleUrls: ['./vendor.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], VendorComponent);
    return VendorComponent;
}());
export { VendorComponent };
//# sourceMappingURL=vendor.component.js.map