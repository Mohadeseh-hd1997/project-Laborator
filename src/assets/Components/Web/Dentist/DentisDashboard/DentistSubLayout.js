import {Box} from "@mui/material";
import React, {useEffect} from "react";
import Navbar from "../../components/Section/Navbar";

export default function DentistSubLayout({chiled}) {

    useEffect(() => {
        document.body.style.margin = 0;
    });

    return (
        <Box sx={{height: 'fit-content', backgroundColor: '#F8F8F8'}}>
            <Box sx={{height: 'fit-content', backgroundColor: '#F8F8F8'}}>
                <Box sx={{paddingRight: '120px', paddingLeft: '100px'}}>
                    <Navbar/>
                </Box>
                {chiled}
            </Box>
        </Box>
    );
}