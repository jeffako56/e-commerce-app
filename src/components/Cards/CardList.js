import React from 'react';
import Card from './Card';
import './Card.css'; // Stylin
import { CONSTANT } from '../../utils/constant/constant';

const CardList = ({ data, lane, label }) => {

    const filterCardsByLane = (lane) => {
        return data.filter((data) => data.lane === lane);
    };

    return (
        <div style={styles.cardList}>
            <div style={styles.header}>
                <h3 style={{ marginLeft: 15 }}>{label ?? ""}</h3>
                <h5 style={{ marginRight: 15, color: CONSTANT.color.primary }}> See All</h5>
            </div>
            <div className="card-list" >
                {filterCardsByLane(lane).map((data, index) => (
                    <Card
                        key={index}
                        product_image={data.product_image}
                        brand_image={data.brand_image}
                        brand_name={data.brand_name}
                        product_name={data.product_name}
                        title={data.title}
                        progress={data.progress}
                    />
                ))}
            </div>
        </div>

    );
};

const styles = {
    cardList: {
        display: "flex",
        flexDirection: "column",
        overflow: 'hidden'
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
}

export default CardList;

