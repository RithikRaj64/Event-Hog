import React from "react";

function Card(props) {
    const business = props.Business;
    const name = props.Name;
    const price = props.Price;
    const phone = props.Phone;
    const email = props.Email;
    const website = props.Website;
    let address;

    if(business == "Hall")
    {
        address = props.Address;
    }

    return (
        
    )
}