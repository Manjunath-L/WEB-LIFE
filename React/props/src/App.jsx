// import Propschildren from "./props/Propschildren";
// import Dummy from "./Styling/Dummy";
// import Globalcss from "./Styling/Globalcss";
// import InlineStyle from "./Styling/InlineStyle";
// import Modulecss from "./Styling/Modulecss";

// function App() {
//   return (
//     <>
//       {/* <Propschildren>
//         <h1>Form App</h1>
//       </Propschildren>
//       <InlineStyle></InlineStyle> */}
//       <Globalcss>
//         <h1>GlobalCss</h1>
//       </Globalcss>
//       <Dummy></Dummy>
//       <Modulecss></Modulecss>
//     </>
//   );
// }

// export default App;

import React from "react";
import Taliwind from "./Taliwind/Taliwind";
import Navbars from "./Taliwind/Navbars";
import Main from "./Taliwind/TaliwindPro/Main";

const App = () => {
  return (
    <div>
      {/* <Taliwind></Taliwind> */}
      <Main></Main>
      {/* <Navbars /> */}
    </div>
  );
};

export default App;
