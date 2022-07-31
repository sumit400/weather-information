import Style from './Style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from './Weather';
const App = () => {



    return (


        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body bg-success text-white">
                                <h5 className="card-title">
                                    <Weather />
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App;