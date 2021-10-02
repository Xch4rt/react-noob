import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from './components/StockRow.js'




function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">          
              <ul className="list-group list-group-flush">
                <StockRow ticker="grub"/>
                <StockRow ticker="goog"/>
                <StockRow ticker="tsla"/>
                <StockRow ticker="msft"/>
              </ul>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
