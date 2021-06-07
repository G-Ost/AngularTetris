import { Injectable } from "@angular/core"


@Injectable({
    providedIn: "root"
})
export class StorageService {
    private playerInfo = { name: "", id: "", color: "green" }
    private logHistory = [];
    private myScores = [];

    setUserInfo(givenInfo: { name: string, id: string, color: string }) {
        // this.playerInfo.name = givenInfo.name;
        // this.playerInfo.id = givenInfo.id;
        // this.playerInfo.color = givenInfo.color;
        localStorage.setItem('playerInfo', JSON.stringify(givenInfo));
        // if (givenInfo.points) {
        //     this.playerInfo.points = givenInfo.points;
        // }
    }

    getInfoFromLocalStorage() {
        let data = JSON.parse(localStorage.getItem("playerInfo"));
        return data;
    }
    resetLocalStorage() {
        localStorage.setItem('playerInfo', JSON.stringify(null));
    }

    passPlayerInfo() {
        this.playerInfo = this.getInfoFromLocalStorage();
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