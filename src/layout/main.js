
import { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/navbar";
import ClippedDrawer from "../components/sidenav";
import TextField from '@mui/material/TextField';
import { Container } from "react-bootstrap";

export function Main() {



    return (
        <>
            <div className='bg-grey'>
               
                <ClippedDrawer />
                {/* Nauman */}

{/* <Container>
<TextField
                            size="small"
                            className="single-input"
                            id="filled-basic"
                            label="First Name"
                            variant="filled"
                            style={{ width: "100%" }}
                            type="text"
                            InputProps={{
                              className: "user-input-card-",
                            }}
                          
                          />
</Container> */}
              
            </div>
         


        </>

    )
}
export default Main