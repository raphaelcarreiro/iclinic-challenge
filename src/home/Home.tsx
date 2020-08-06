import React, { useState, useEffect } from "react";
import {
  Container,
  WelcomeTitle,
  Content,
  StartButton,
  Side,
  Avatar,
  ButtonBack,
  ButtonTopChoose,
  ButtonBottomChoose,
} from "./styles";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const avatarSrc = {
  DARK:
    "https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png",
  LIGHT:
    "https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/luke-skywalker.png",
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setPath(() => (data.name === "Darth Vader" ? "dark" : "light"));
    }
  }, [data]);

  function handleStart() {
    setLoading(true);

    Promise.race([
      axios.get("https://swapi.dev/api/people/2"),
      axios.get("https://swapi.dev/api/people/4"),
    ])
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {data ? (
        <Side path={path}>
          <ButtonBack onClick={() => setData(null)}>
            <MdArrowBack size={36} /> back
          </ButtonBack>
          <ButtonTopChoose disabled={loading} path={path} onClick={handleStart}>
            choose your path, Padawan
          </ButtonTopChoose>
          <Avatar src={path === "dark" ? avatarSrc.DARK : avatarSrc.LIGHT} />
          <p>
            Your master is <strong>{data.name}</strong>
          </p>
          <ButtonBottomChoose
            disabled={loading}
            path={path}
            onClick={handleStart}
          >
            choose your path, Padawan
          </ButtonBottomChoose>
        </Side>
      ) : (
        <Container>
          <Content>
            <WelcomeTitle>
              Welcome to <strong>iClinic</strong>
            </WelcomeTitle>
            <p>FRONTEND CHALLENGE</p>
          </Content>
          <StartButton disabled={loading} onClick={handleStart}>
            S T A R T
          </StartButton>
        </Container>
      )}
    </>
  );
};

export default Home;
