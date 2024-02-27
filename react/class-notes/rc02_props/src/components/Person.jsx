import Msg from "./Msg";

const Person = ({ name, tel, img }) => {
  //console.log(props);
  //const { name, tel, img } = props;
  return (
    <div>
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>Tel: {tel}</p>
    </div>
  );
};

export default Person;
