import React, {Component} from 'react';
import { iex } from '../config/iex';
import { stock } from '../resources/stock';
class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Pediremos todo esto atravez de la api  
            data : {}
        }
    }

    applyData(data)
    {
        this.setState({
            data : data
        })
    }

    componentDidMount() {
        // query the API
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() { 
        
        return ( 
        <tr>
            <td>{this.props.ticker}</td>
            <td>{this.state.data.price}</td>
            <td>{this.state.data.date}</td>
            <td>{this.state.data.time}</td>
        </tr> );
    }
}
 
export default StockRow;