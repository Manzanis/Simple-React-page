import './App.css';
import axios from 'axios';
import React, {Component} from 'react';
import ChartControl from "./ChartControl";
const DEFAULT_QUERY_Temperaturas = "Temperaturas/Get";

class Full extends React.Component {
  constructor(props) {
    super(props);

    this.graphData = { sensores: [], temperaturas: "[]" };
    this.state = {
      firstTime: false,
      isLoading: false,
      graphDataLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ firstTime: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state || nextProps !== this.props) {
          if (nextState.firstTime == true) {
            this.setState({
              firstTime: false,
              graphDataLoaded: false,
            });
        //   this.getGraphData();
        }
        return true;
      }
    return false;
    }

  async getGraphData() {
    axios
      .all([
        axios.get(
          this.props.API_URL_HOST +
            DEFAULT_QUERY_Temperaturas +
            "?" +
            this.props.encrypt("periodoDeTiempo=1&" + this.props.API_TOKEN)
        ),
      ])
      .then(
        axios.spread((graphData) => {
          this.graphData = graphData.data;
          console.log("xx1", graphData.data);

          //graph.data.temperaturas;

          //   { fecha: "Page A", sensor1: 200, sensor2: 2400, sensor3: 300, sensor4: 300 },

          this.setState({
            graphDataLoaded: true,
          });
        })
      )

      .catch((error) => {
        this.props.DisplayError(0, "Full - Graph Messages", error);
      });
  }

  render() {
    /*this.allowMsgs();
    console.log("xx4", this.graphData.temperaturas);
    let casa = eval(this.graphData.temperaturas);
    console.log("xx3", casa);*/
    return (
        <div>
          <p>Hello World!</p>
        </div>
        // <React.Fragment>
        //       <Row className="text-center">
        //         <Col hidden={this.state.graphDataLoaded}>
        //           <MDSpinner />
        //         </Col>
        //       </Row>
        //       <Row>
        //         <ChartControl
        //           data={casa}
        //           type="monotone"
        //           colors={["#ff7300", "#387908", "#887300", "#f87908"]}
        //           lines={this.graphData.sensores}
        //         />
        //       </Row>
        //       </React.Fragment>     
    )
  }
}

export default Full;
