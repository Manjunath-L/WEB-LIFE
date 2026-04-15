let style = {
  backgroundColor: "red",
  color: "white",
};
const InlineStyle = () => {
  return (
    <>
      <h1 style={style}>InlineStyle</h1>
      <h1 style={{ backgroundColor: "red" }}>InlineStyle</h1>
    </>
  );
};

export default InlineStyle;
