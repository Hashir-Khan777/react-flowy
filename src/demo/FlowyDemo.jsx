import React, { useEffect } from "react";
import "./styles.css";
import "./flowy.min.css";
import "./main";

const FlowyDemo = () => {
  return (
    <div>
      <div id="navigation">
        <div id="leftside">
          <div id="details">
            <div id="back">
              <img src="assets/arrow.svg" />
            </div>
            <div id="names">
              <p id="title">Your automation pipeline</p>
              <p id="subtitle">Marketing automation</p>
            </div>
          </div>
        </div>
        <div id="centerswitch">
          <div id="leftswitch">Diagram view</div>
          <div id="rightswitch">Code editor</div>
        </div>
        <div id="buttonsright">
          <div id="discard">Discard</div>
          <div id="publish">Publish to site</div>
        </div>
      </div>
      <div id="leftcard">
        <div id="closecard">
          <img src="assets/closeleft.svg" />
        </div>
        <p id="header">Blocks</p>
        <div id="search">
          <img src="assets/search.svg" />
          <input type="text" placeholder="Search blocks" />
        </div>
        <div id="subnav">
          <div id="triggers" class="navactive side">
            Triggers
          </div>
          <div id="actions" class="navdisabled side">
            Actions
          </div>
          <div id="loggers" class="navdisabled side">
            Loggers
          </div>
        </div>
        <div id="blocklist">
          <div class="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              class="blockelemtype"
              value="1"
            />
            <div class="grabme">
              <img src="assets/grabme.svg" />
            </div>
            <div class="blockin">
              <div class="blockico">
                <span></span>
                <img src="assets/eye.svg" />
              </div>
              <div class="blocktext">
                <p class="blocktitle">New visitor</p>
                <p class="blockdesc">
                  Triggers when somebody visits a specified page
                </p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              class="blockelemtype"
              value="2"
            />
            <div class="grabme">
              <img src="assets/grabme.svg" />
            </div>
            <div class="blockin">
              <div class="blockico">
                <span></span>
                <img src="assets/action.svg" />
              </div>
              <div class="blocktext">
                <p class="blocktitle">Action is performed</p>
                <p class="blockdesc">
                  Triggers when somebody performs a specified action
                </p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              class="blockelemtype"
              value="3"
            />
            <div class="grabme">
              <img src="assets/grabme.svg" />
            </div>
            <div class="blockin">
              <div class="blockico">
                <span></span>
                <img src="assets/time.svg" />
              </div>
              <div class="blocktext">
                <p class="blocktitle">Time has passed</p>
                <p class="blockdesc">
                  Triggers after a specified amount of time
                </p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              class="blockelemtype"
              value="4"
            />
            <div class="grabme">
              <img src="assets/grabme.svg" />
            </div>
            <div class="blockin">
              <div class="blockico">
                <span></span>
                <img src="assets/error.svg" />
              </div>
              <div class="blocktext">
                <p class="blocktitle">Error prompt</p>
                <p class="blockdesc">Triggers when a specified error happens</p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <a href="https://github.com/alyssaxuu/flowy/" target="_blank">
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://twitter.com/alyssaxuu/status/1199724989353730048"
            target="_blank"
          >
            Twitter
          </a>
          <span>·</span>
          <a href="https://alyssax.com" target="_blank">
            <p>Made with</p>
            <img src="assets/heart.svg" />
            <p>by</p>
            Alyssa X
          </a>
        </div>
      </div>
      <div id="propwrap" className="">
        <div id="properties" className="expanded">
          <div id="close">
            <img src="assets/close.svg" />
          </div>
          <p id="header2">Properties</p>
          <div id="propswitch">
            <div id="dataprop">Data</div>
            <div id="alertprop">Alerts</div>
            <div id="logsprop">Logs</div>
          </div>
          <div id="proplist">
            <p class="inputlabel">Select database</p>
            <div class="dropme">
              Database 1 <img src="assets/dropdown.svg" />
            </div>
            <p class="inputlabel">Check properties</p>
            <div class="dropme">
              All
              <img src="assets/dropdown.svg" />
            </div>
            <div class="checkus">
              <img src="assets/checkon.svg" />
              <p>Log on successful performance</p>
            </div>
            <div class="checkus">
              <img src="assets/checkoff.svg" />
              <p>Give priority to this block</p>
            </div>
          </div>
          <div id="divisionthing"></div>
          <div id="removeblock">Delete blocks</div>
        </div>
      </div>
      <div id="canvas"></div>
    </div>
  );
};

export default FlowyDemo;
