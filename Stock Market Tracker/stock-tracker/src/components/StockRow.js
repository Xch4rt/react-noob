import React, {Component} from 'react';
import { iex } from '../config/iex';
import { stock } from '../resources/stock';
const changeStyle = {
    color : '#4caf50',
    fontSize : '0.8rem',
    marginLeft : 5
  }
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
            <li className="list-group-item">
            <b>{this.props.ticker}</b> ${this.state.data.price}
            <span className="change" style={changeStyle}>
              +12.32 (1.4%)
            </span>
          </li>    
        );
    }
}
 /*
 <tr>
            <td></td>
            <td></td>
            <td>{this.state.data.date}</td>
            <td>{this.state.data.time}</td>
        </tr> 
 */
export default StockRow;