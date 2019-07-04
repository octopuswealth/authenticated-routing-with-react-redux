// tslint:disable:interface-name
import { createBrowserHistory, Location } from "history";

declare global {
  interface Window {
    dataLayer: any;
  }
}

const history = createBrowserHistory();

export default history;
