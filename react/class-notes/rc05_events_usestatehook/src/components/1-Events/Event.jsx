const Event = () => {
  //statik degisken
  let text = "Hi FS15";

  const handleClick = () => {
    alert("Hi Event");
  };

  const handleReset = (msg) => {
    console.log(msg);
  };

  function degistir() {
    text = "Hi React";
    console.log(text);
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleReset("Please clear the text")}>
        Reset
      </button>
      <button onClick={degistir}>Change</button>
    </div>
  );
};

export default Event;
