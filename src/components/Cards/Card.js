import React from 'react';
import './Card.css';

import ImageWithPlaceholder from '../Image/ImageWithPlaceholder';

const Card = ({ product_image, brand_image, progress, title, brand_name, product_name }) => {
    return (
        <div className="card"
            style={styles.card}>
            <ImageWithPlaceholder
                isProduct={true}
                src={product_image}
                alt="Product Image"
                placeholder="https://picsum.photos/200/100?random" // Placeholder image URL
            />

            <div style={styles.cardContent}>
                <div style={{ marginTop: 10, flex: 4 }}>
                    <ImageWithPlaceholder
                        isProduct={false}
                        src={brand_image}
                        alt="Brand Image"
                        placeholder="https://picsum.photos/50/15?random" // Placeholder image URL
                    />
                    <p style={styles.textStyle}>{brand_name}</p>
                    <p style={styles.textStyle}>{product_name}</p>
                    <p style={styles.textStyle}>{title}</p>
                </div>
                <div style={{ marginTop: 10 }}>
                    <div style={{ backgroundColor: "gray", borderRadius: 3 }}>
                        <div style={{
                            width: Math.round(progress * 100) + "%", marginBottom: 0,
                            backgroundColor: "#7130d5",
                            height: 15,
                            borderRadius: 3
                        }}></div>
                    </div>
                    <p style={{ marginTop: 0 }}>{Math.round(progress * 100)}% Complete</p>
                </div>

            </div>

        </div >
    );
};

export default Card;


const styles = {
    card: {

        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        overflow: 'auto',
        padding: 0,
        marginRight: 10,
        justifyContent: "space-between"

    },
    cardContent: {
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'left',
        flex: 1,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
    },
    textStyle: {
        margin: 0,
        fontWeight: 500
    }
}