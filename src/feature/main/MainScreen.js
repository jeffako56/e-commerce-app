import React, { useState } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Discount, HomeSharp, Person } from "@mui/icons-material";
import HomeScreen from "../home/HomeScreen";
import CouponScreen from "../coupons/CouponScreen";
import MeScreen from "../me/MeScreen";
import { CONSTANT } from "../../utils/constant/constant";


const MainScreen = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            {value === 0 ? (
                <HomeScreen />
            ) : value === 1 ? (
                <CouponScreen />
            ) : (
                <MeScreen />
            )}
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
                style={styles.stickToBottom}
                sx={{
                    "& , .Mui-selected ,  .MuiBottomNavigationAction,  .MuiBottomNavigation": {
                        color: CONSTANT.color.primary,
                    }
                }}
            >
                <BottomNavigationAction label="Home" icon={< HomeSharp />} />
                <BottomNavigationAction label="Coupons" icon={<Discount />} />
                <BottomNavigationAction label="Me" icon={<Person />} />
            </BottomNavigation>
        </div>
    );
}

const styles = {
    stickToBottom: {
        color: CONSTANT.color.primary,
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};

export default MainScreen;