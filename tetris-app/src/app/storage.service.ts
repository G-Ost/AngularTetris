import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class StorageService {
    private playerInfo = { name: "", email: "" }
    private logHistory = [];

    setUserInfo(givenInfo) {
        this.playerInfo.name = givenInfo.name;
        this.playerInfo.email = givenInfo.email;
        console.log(givenInfo.name)
    }

    passPlayerInfo() {
        return this.playerInfo;
    }

    takeLog(givenLog) {
        this.logHistory = givenLog;
    }

    passLog() {
        return this.logHistory;
    }
}