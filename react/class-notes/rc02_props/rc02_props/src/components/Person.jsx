import Msg from "./Msg";

const Person = ({ name, img, tel }) => {
  // Destructur  const {name, img, tel} = props
  return (
    <div>
      <Msg isim={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
