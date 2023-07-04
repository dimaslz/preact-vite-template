import { Router, Route } from "preact-router";

import Home from '@/pages/home'
import Other from "@/pages/other";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/other" component={Other} />
    </Router>
  )
}

export default App;
