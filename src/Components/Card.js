import React from "react";
import { Box, FormControl, Input, FormHelperText, Button } from '@mui/material';

export default function Card(props) {
    const p = props.props;
    const business = p.Business;
    const name = p.Name;
    const price = p.Price;
    const phone = p.Phone;
    const email = p.Email;
    const website = p.Website;
    let address;

    if (business === "Hall") {
        address = p.Address;
    }

    return (
        <>
            <Box className='t' sx={{
                backgroundColor: '#f06292',
                width: 450,
                height: 340,
                borderRadius: 25
            }}>
                <div className='tb'>
                    <h1>{business}</h1>

                    <p>Name : {name}</p>
                    <p>Price : {price} Rupees {(business == "Hall" || business == "Photography") ? "/ hour" : "/ person"}</p>
                    <p>Contact Number : {phone}</p>
                    <p>Email : {email}</p>
                    <p>Website : <a href={website}>{website}</a></p>

                    <p>{(business === "Hall") ? `Address : ${address}` : ""}</p>
                </div>
            </Box>
        </>
    )
}