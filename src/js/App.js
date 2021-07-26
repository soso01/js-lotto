import createStore from "./store.js";
import { KEY, INIT_STATE } from "./constants.js";
import { $ } from "./util.js";
import { MoneyInput, LottoList, WinnerInput } from "./components/index.js";

const App = () => {
  const store = createStore(INIT_STATE);

  const render = () => {
    const app = $.get("#app");
    app.appendChild(MoneyInput(store));
    app.appendChild(LottoList(store));
    app.appendChild(WinnerInput(store));
  };

  render();
};

export default App;
