import nbaLogo from "../assets/nba-logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Container>
      <Image src={nbaLogo}></Image>
      <h1>NBA Legends</h1>
    </Container>
  );
};
export default Header;
