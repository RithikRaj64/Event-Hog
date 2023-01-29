import React, { useEffect } from "react";
import Card from "./Card";

export default function Show() {

    let props;

    useEffect = (() => { props = window.sessionStorage.getItem('props') }, []);

    let list = [];
    props.forEach(it => {
        let card = <Card props={it} />;
        list.push(...card);
    });

    return (
        <div className="box-contents">
            <ul>{list}</ul>
            <p>{props.forEach(it => {
                let card = <Card props={it} />;
                list.push(...card);
            })}</p>
        </div>
    )
}