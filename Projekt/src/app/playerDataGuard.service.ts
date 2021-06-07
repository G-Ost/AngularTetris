import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: "root"
})

export class GameGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _storage: StorageService) {
        this.storageValidation = _storage.getInfoFromLocalStorage();
    }
    public storageValidation;

    canActivate(): boolean {
        if (this.storageValidation === null) {
            this._router.navigate(["/welcome"])
        } else {
            return true;
        }
    }
}