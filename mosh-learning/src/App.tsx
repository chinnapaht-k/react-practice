// import ListGroup from "./component/ListGroup";
// import { MouseEvent } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";

function App() {
  // let items = ["New York", "San fransicco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
      <Button color="primary" onClick={() => console.log("Clicked!")}>
        Text
      </Button>
    </div>
  );
}

export default App;
