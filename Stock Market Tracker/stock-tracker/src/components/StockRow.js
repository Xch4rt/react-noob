import React, {Component} from 'react';
import { iex } from '../config/iex';
import { stock } from '../resources/stock';

//#e53935


class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price : null,
            date : null,
            time : null,
            dollar_change : null,
            percent_change : null
            
            
        }
    }
    changeStyle () {
        var color;
        if (this.state.dollar_change > 0)
            color = '#4caf50'
        else
            color = '#e53935'
        return {
        color : color,
        fontSize : '0.8rem',
        marginLeft : 5}
  }

    applyData(data)
    {
        this.setState({
            price : data.price.toFixed(2),
            date : data.date,
            time : data.time,
        });
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
            const dollar_change = (data.price - yesterday.price).toFixed(2);
            const percent_change = (100 * dollar_change / yesterday.price).toFixed(2)
            this.setState({
                // Price is a bad methos name on yesterday
                
                dollar_change : dollar_change,
                percent_change : percent_change
            })
        })
    }

    componentDidMount() {
        // query the API
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() { 
        
        return ( 
            <li className="list-group-item">
            <b>{this.props.ticker}</b> ${this.state.price}
            <span className="change" style={this.changeStyle()}>
                
                ${this.state.dollar_change}
                &nbsp; &nbsp;
                {this.state.percent_change}%
              
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