import React from "react";
import Card from "./Card";

// ProfileCard 컴포넌트 만들기
function ProfileCard(props) {

    const infos = [
        {
            title: "Hwang Seon Jae 1",
            backgroundColor: "#4ea04e"
        },
        {
            title: "Hwang Seon Jae 2",
            backgroundColor: "#4ea04e"
        },
        {
            title: "Hwang Seon Jae 3",
            backgroundColor: "#4ea04e"
        },
    ];

    // infos.map((info) => {
    //     <Card title={info.title} backgoundColor={info.backgoundColor}>
    //         <p>안녕하세요. {info.title} 입니다.</p>
    //         <p>저는 리엑트를 사용해서 개발하고 있습니다.</p>
    //     </Card>
    // });

    // return (
    //     <Card title="Hwang Seon Jae" backgoundColor="#4ea04e">
    //         <p>안녕하세요.</p>
    //         <p>저는 리엑트를 사용해서 개발하고 있습니다.</p>
    //     </Card>
    // );

    return (
        <div>
            {
                infos.map((info, i) => {
                    return (
                        <Card key={i} title={info.title} backgoundColor={info.backgroundColor}>
                            <p>안녕하세요. {info.title} 입니다.</p>
                            <p>적용한 색은 {info.backgoundColor} 입니다.</p>
                        </Card>
                    );
                })
            }
        </div>
    );
}

export default ProfileCard;