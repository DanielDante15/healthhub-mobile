import React from "react";
import { View, Text } from "react-native";

function RatingStar({ rating, small = false }: { rating: number, small?: boolean }) {

    const renderStars = () => {
        if (rating > 5) rating = 5
        let stars = [];
        for (let i = 0; i < rating; i++) {
            if (stars.length <= 5) {
                stars.push(<Text key={i} style={{ fontSize: small ? 14 : 18 }} >★</Text>);
            }
        }

        for (let i = 0; i < (5 - rating); i++) {
            if (stars.length <= 5) {
                stars.push(<Text key={rating + i} style={{ fontSize: small ? 14 : 18 }}>☆</Text>);
            }
        }
        return stars;
    };

    return <View style={{ flexDirection: "row" }}>{renderStars()}</View>;
}

export default RatingStar;
