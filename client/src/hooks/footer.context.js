import {createContext} from "react";

export const FooterContext = createContext({
    links: [
        {label: "Support", href: "#"},
        {label: "Learning", href: "#"},
        {label: "Русская версия", href: "#"},
    ],
    copyright: "Maksim Shabanov"
})
