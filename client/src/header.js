import { useEffect, useState } from "react";

export default function Header() {
    useEffect(() => {
        console.log("Header is mounted!");
    }, []);

    return <p>Header is up and running!</p>;
}
