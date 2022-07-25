import { Keyboard } from "./components/Keyboard/Keyboard";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        laboriosam, nihil incidunt voluptatibus enim vitae. Reprehenderit minus
        soluta quo ex natus aliquam? Velit, cupiditate nostrum vel nihil
        asperiores accusantium alias.
      </div>
      <Keyboard />
    </div>
  );
};

export default App;
