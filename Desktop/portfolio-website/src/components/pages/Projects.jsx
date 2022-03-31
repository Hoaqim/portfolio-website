import React, { Component } from "react";
import "../static/css/Videos.scss";
import algo from "../static/videos/algo.mp4";
import hrmanager from "../static/videos/hrmanager.mp4";
import pplan from "../static/videos/pplan.mp4";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="panel">
        <div className="container">
          <div className="row">
            <div className="video">
              <h3>Alghoritm Visualizer</h3>
              <video width="350" height="350" controls muted>
                <source src={algo} type="video/mp4"></source>
              </video>
            </div>
            <div className="video">
              <h3>HRManager</h3>
              <video width="350" height="350" controls muted>
                <source src={hrmanager} type="video/mp4"></source>
              </video>
            </div>
            <div className="video">
              <h3>PPlan</h3>
              <video width="350" height="350" controls muted>
                <source src={pplan} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
