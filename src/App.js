import React,{Suspense} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

const Home = React.lazy(() =>
  import("./pages/receipe")
);

const Info = React.lazy(() =>
  import("./pages/info")
);

function App() {
  return (
      <Suspense fallback={"Loding"}>
        <Router>

          <Switch>
                        
           <Route 
              path="/info" 
              render= {props => <Info {...props} />}
            />
            <Route  
              path="/" 
              render= {props => <Home {...props} />}
            />
          </Switch>

        </Router>
      </Suspense>
  );
}
export default App;
