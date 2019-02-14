import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Statement extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLogin: false,
            sucess: false,
            init: true,
            account: [],
        };
    }
    getDataFromDb = (handle) => {
        this.setState({ login: true })
        const url = '/extratocliente/';
        const finalUrl = url.concat(handle)
        fetch(finalUrl)
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
        const buttonDisp = (
            <div>
                <div className="formInput">
                    <input
                        type="text"
                        onChange={e => this.setState({ account: e.target.value })}
                        placeholder="Digite a conta do cliente que deseja ver o saldo"
                    />
                    <button onClick={() => this.getDataFromDb(this.state.account)}>
                        Buscar
            </button>
                </div>
                <div></div>

            </div>
        )

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
                <JsonTable rows={this.state.data} excludeColumns={['_id']} />;

                <div className='homeBtn'>
                    <Link to='/'><button>Home</button></Link>
                </div>
            </div>
        )

        const current = (
            this.state.init === true ? <div>{buttonDisp}</div> :
                this.state.login === true ? <div>{loginDisp}</div> :
                    this.state.sucess === false ? <div>{errorDisp}</div> :
                        <div>{dataDisp}</div>
        )

        return (
            <div>
                <div className='header'>
                    <h2>Extrato</h2>
                </div>
                {current}
            </div>
        )


    }
}

export default Statement;