import { Injectable } from "@angular/core"


@Injectable({
    providedIn: "root"
})
export class StorageService {
    private playerInfo = { name: "", id: "", points: 0 }
    private logHistory = [];
    private myScores = [];
    private externalScores = [];

    setUserInfo(givenInfo) {
        this.playerInfo.name = givenInfo.name;
        this.playerInfo.id = givenInfo.id;
        if (givenInfo.points) {
            this.playerInfo.points = givenInfo.points;
        }
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

    takeMyScores(givenScores) {
        this.myScores = givenScores;
    }
    passScores() {
        return this.myScores
    }

}