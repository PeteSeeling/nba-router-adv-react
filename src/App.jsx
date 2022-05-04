import { Route, Switch } from 'react-router-dom';
import List from './views/List';
import Detail from './views/Detail';

export default function App() {
  return (
    <Switch>
      <Route path='/character/:id'>
        <Detail />
      </Route>
      <Route path='/'>
        <List />
      </Route>
    </Switch>
  )
}
