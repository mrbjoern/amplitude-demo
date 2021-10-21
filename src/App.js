import { Button } from "@navikt/ds-react";
import { logAmplitudeEvent } from "./amplitude";
import "@navikt/ds-css";
import "./App.css";

const App = () => {
  const onClick = (buttonType) => {
    logAmplitudeEvent("Click on button", { buttonType });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-row">
          <Button variant="primary" onClick={() => onClick("Primary")}>
            Primary button
          </Button>
          <Button variant="secondary" onClick={() => onClick("Secondary")}>
            Secondary button
          </Button>
        </div>
      </header>
    </div>
  );
};

export default App;
