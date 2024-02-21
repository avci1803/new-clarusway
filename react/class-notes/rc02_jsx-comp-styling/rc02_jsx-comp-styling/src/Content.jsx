import forest from "./img/forest.jpg";
import "./Content.css";

const Content = () => {
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.5rem",
    lineHeight: "1.5 ",
  };

  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  };

  return (
    <div className="content-div">
      <h2 style={{ color: "white", backgroundColor: "red" }}> React JS</h2>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        nostrum?
      </p>
      <img src={forest} alt="forest" style={imgStyle} />
      <img
        src="https://media.istockphoto.com/id/525728200/de/foto/b%C3%A4ume-mit-blo%C3%9Fer-hand-pflanzen.jpg?s=2048x2048&w=is&k=20&c=ns_Ofeu4IK2iwP-NUdBPB4Z4jpigy5Tzh7BsB0xjL1g="
        alt="flower"
        style={imgStyle}
      />
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis
        corrupti excepturi nihil itaque exercitationem deleniti laborum
        repudiandae odio laboriosam!
      </p>
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore
        nihil similique ut expedita obcaecati distinctio repellendus vero
        dignissimos ipsum, labore, iusto laudantium quod consequuntur laborum
        necessitatibus numquam neque delectus.
      </p>
    </div>
  );
};

export default Content;
