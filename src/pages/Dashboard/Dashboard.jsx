import React, { useState, useEffect } from "react";
import * as S from "./Dashboard.style";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://react-task-back-xtd2r.ondigitalocean.app/content", {
      headers: {
        authorization: `Beared ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="wrapper">
      <S.FlexContainer>
        {data &&
          data.map((item) => {
            return <Card image={item.image} score={Number(item.score)} key={item.id} />;
          })}
      </S.FlexContainer>
    </div>
  );
};

export default Dashboard;
