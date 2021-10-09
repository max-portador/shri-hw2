import {createContext} from "react";
import successSVG from "../assets/circle-sucsess.svg"
import failSVG from "../assets/circle-failed.svg"
import updateSVG from "../assets/circle-update.svg"


export const HistoryContext = createContext({
    builds: [
        {
            status: "ok",
            num: "1368",
            message: "add documentation for postgres scaler",
            branch: "master",
            hash: "9c9f0b9",
            author: "Philip Kirkorov",
            date: "21 янв, 03:06",
            duration: "1 ч 20 мин"
        },
        {
            status: "failed",
            num: "1367",
            message: "Super cool UI kit for making websites that look like games",
            branch: "super-cool-ui-kit",
            hash: "952e5567",
            author: "Vadim Makeev",
            date: "21 янв, 03:06",
            duration: "1 ч 20 мин"
        },
        {
            status: "updated",
            num: "1366",
            message: "add documentation for postgres scaler",
            branch: "master",
            hash: "9c9f0b9",
            author: "Philip Kirkorov",
            date: "21 янв, 03:06",
            duration: "1 ч 20 мин"
        },
    ],
    status: {
        "ok": {
            icon: successSVG,
            statusColor: "#00B341",
        },
        "failed": {
            icon: failSVG,
            statusColor: "#FF3333",
        },
        "updated": {
            icon: updateSVG,
            statusColor: "#FF9A00",
        },
    }
})