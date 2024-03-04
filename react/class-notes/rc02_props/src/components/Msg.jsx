const Msg = ({ name }) => {
  return (
    <div
      style={{
        height: "8px",
        weight: "10px",
        margin: "auto",
        padding: "20px",
        color: "red",
        backgroundColor: "gold",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Hi, My name isss {name}
    </div>
  );
};

export default Msg;
