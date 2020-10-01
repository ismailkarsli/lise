import React from "react";
import Container from "../ui/Container";
import Edit from "./Edit";
import SubMenu from "../header/SubMenu";

const navigation = [
  {
    title: "Genel Ayarlar",
    url: "/",
  },
  {
    title: "Sosyal Medya Bağlantıları",
    url: "/sosyal-medya",
  },
];

const Settings = () => {
  return (
    <Container>
      <SubMenu data={navigation} />
      <Edit />
    </Container>
  );
};

export default Settings;
