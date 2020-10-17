const hover = {
  "&:hover": {
    color: "#000",
    background: "#f2f2f2"
  }
};

const container = {
  userSelect: "none",
  width: "200px",
  mx: "auto",
  textAlign: "left"
};

const placeholder = {
  border: "1px solid black",
  padding: "2",
  ...hover
};

const list = {
  listStyle: "none",
  padding: 0,
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  borderBottom: "1px solid black"
};

const item = {
  padding: "2",
  ...hover
};

export default {
  container,
  placeholder,
  list,
  item
};
