import { Container, Row, Col } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import React from "react";
import { useEffect } from "react";
import axios from "axios";

export const Footer = () => {
  const [views, SetViews] = React.useState([])
  useEffect(() => {
    axios
      .get("https://api.countapi.xyz/update/harshazlive/c0c077b2-8475-43bf-b9f5-f7dec9a286e3/?amount=1")
      .then((res) => {
        //console.log(res.data.value)
        SetViews(((res.data.value)/2).toFixed())
      })
  },[]);


  return (
    <footer className="footer">
      <Container>
        <Container className="text-center">
            <p><Eye size={20}/> Views: {views}</p>
            <p>© Harshaz.live; Copyright 2022. All Rights Reserved</p>
        </Container>
      </Container>
    </footer>
  )
}
