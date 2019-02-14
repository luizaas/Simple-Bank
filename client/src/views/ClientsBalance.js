import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientsBalance extends Component {
    constructor(param) {
        super(param);
        this.state = {
            param: param,
            data: [],
            isLogin: false,
            sucess: false,
            init: true,
            account: [],
        };
    }
    componentDidMount() {
        this.setState({ login: true })
        const url = '/listasaldo';
        fetch(url)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    sucess: data.sucess,
                    login: false,
                    data: data.data,
                    init: false
                })
            )
            .catch(err => {
                console.log(err)
                this.setState({
                    login: false,
                    sucess: false,
                    init: false
                })
            });
    };


    // here is our UI
    // it is easy to understand their functions when you 
    // see them render into our screen
    render() {
        const { data } = this.state;
        const JsonTable = require('ts-react-json-table');


        const loginDisp = (
            <div>
                <p>Login</p>
            </div>
        )

        const errorDisp = (
            <div>

                <p>error</p>
            </div>
        )

        const dataDisp = (
            <div className="table">
                <JsonTable rows={this.state.data} excludeColumns={['_id']} />

                <div className='homeBtn'>
                    <Link to='/'><button>Home</button></Link>
                </div>
            </div>
        )

        const current = (
            this.state.login === true ? <div>{loginDisp}</div> :
                this.state.sucess === false ? <div>{errorDisp}</div> :
                    <div>{dataDisp}</div>
        )

        return (
            <div>
                <div className='header'>
                    <h2>Saldo de todos os Clientes</h2>
                </div>
                {current}
            </div>
        )


    }
}

export default ClientsBalance;