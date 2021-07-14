import React, { useState, useEffect, useContext } from "react";
import * as S from "./Dashboard.style";
import Card from "../../components/Card/Card";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const Dashboard = () => {
  const [data, setData] = useState();
  const authContext = useContext(AuthContext);
  const history = useHistory();
  if (!authContext.auth) {
    history.push("/");
  }
  useEffect(() => {
    fetch("https://react-task-back-xtd2r.ondigitalocean.app/content", {
      headers: {
        authorization: `Beared ${authContext.auth}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [authContext.auth]);

  console.log(data);
  return (
    <div className="wrapper">
      <S.FlexContainer>
        {data &&
          data.map((item) => {
            return (
              <Card
                image={item.image}
                score={Number(item.score)}
                key={item.id}
              />
            );
          })}
      </S.FlexContainer>
    </div>
  );
};

export default Dashboard;
