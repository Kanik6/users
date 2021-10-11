import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div className="App">
        <Layout>
            <Switch>
                <Route path="/" exact component={UserList}/>
                <Route path="/form" exact component={UserForm}/>
                <Route path="/form/:id" exact component={UserForm}/>
            </Switch>
        </Layout>
    </div>
);

export default App;
