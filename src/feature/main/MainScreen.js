import React, { useState } from "react";

import { BottomNavigation, BottomNavigationAction, ThemeProvider } from "@mui/material";
import { Discount, HomeSharp, Person } from "@mui/icons-material";
import { CONSTANT } from "../../utils/constant/constant";

import HomeScreen from "../home/HomeScreen";
import CouponScreen from "../coupons/CouponScreen";
import MeScreen from "../me/MeScreen";
import { theme } from "../../utils/themes/theme";

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
            <ThemeProvider theme={theme}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                    style={styles.stickToBottom}
                >
                    <BottomNavigationAction label="Home" icon={< HomeSharp />} />
                    <BottomNavigationAction label="Coupons" icon={<Discount />} />
                    <BottomNavigationAction label="Me" icon={<Person />} />
                </BottomNavigation>
            </ThemeProvider>

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