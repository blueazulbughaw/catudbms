import React, { Component } from 'react';
import GoogleCharts from "google-charts";

class Testimonials extends Component {
   constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const mysql = require("mysql");
      const connection = mysql.createConnection({
        host: "localhost",
        user: "blueazul_admin",
        password: "Helloworld!1234",
        database: "blueazul_dbms",
      });
      connection.connect((err) => {
        if (err) {
          console.log(err);
          return;
        }
  
        const query = "SELECT name, score FROM my_table";
        connection.query(query, (err, result) => {
          if (err) {
            console.log("Error : " + err);
            return;
          }
  
          this.setState({
            data: result.rows,
          });
        });
      });
    }  

  render() {



    const data = this.state.data;

    const options = {
      title: "My Chart",
      hAxis: {
        title: "Name",
      },
      vAxis: {
        title: "Score",
      },
    };

    return (
      <div>
        <GoogleCharts.BarChart
          data={data}
          options={options}
          width={500}
          height={300}
        />
      </div>
    );
  }
}

export default Testimonials;
