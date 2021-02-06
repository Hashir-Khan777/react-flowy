import React, { useEffect } from "react";
import "./styles.css";
import "./flowy.min.css";
import $ from "jquery";
import flowy from "../engine/flowy";

const FlowyDemo = () => {
  useEffect(() => {
    $(document).ready(function () {
      var rightcard = false;
      var tempblock;
      var tempblock2;
      $("#blocklist").html(
        '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>'
      );
      flowy($("#canvas"), drag, release, snapping);
      function snapping(drag, first) {
        drag.children(".grabme").remove();
        drag.children(".blockin").remove();
        if (drag.children(".blockelemtype").val() == "1") {
          drag.append(
            "<div class='blockyleft'><img src='assets/eyeblue.svg'><p class='blockyname'>New visitor</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "2") {
          drag.append(
            "<div class='blockyleft'><img src='assets/actionblue.svg'><p class='blockyname'>Action is performed</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Action 1</span> is performed</div>"
          );
        } else if (drag.children(".blockelemtype").val() == "3") {
          drag.append(
            "<div class='blockyleft'><img src='assets/timeblue.svg'><p class='blockyname'>Time has passed</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds</span> have passed</div>"
          );
        } else if (drag.children(".blockelemtype").val() == "4") {
          drag.append(
            "<div class='blockyleft'><img src='assets/errorblue.svg'><p class='blockyname'>Error prompt</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</span> is triggered</div>"
          );
        } else if (drag.children(".blockelemtype").val() == "5") {
          drag.append(
            "<div class='blockyleft'><img src='assets/databaseorange.svg'><p class='blockyname'>New database entry</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "6") {
          drag.append(
            "<div class='blockyleft'><img src='assets/databaseorange.svg'><p class='blockyname'>Update database</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Update <span>Database 1</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "7") {
          drag.append(
            "<div class='blockyleft'><img src='assets/actionorange.svg'><p class='blockyname'>Perform an action</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "8") {
          drag.append(
            "<div class='blockyleft'><img src='assets/twitterorange.svg'><p class='blockyname'>Make a tweet</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "9") {
          drag.append(
            "<div class='blockyleft'><img src='assets/logred.svg'><p class='blockyname'>Add new log entry</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Add new <span>success</span> log entry</div>"
          );
        } else if (drag.children(".blockelemtype").val() == "10") {
          drag.append(
            "<div class='blockyleft'><img src='assets/logred.svg'><p class='blockyname'>Update logs</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Edit <span>Log Entry 1</span></div>"
          );
        } else if (drag.children(".blockelemtype").val() == "11") {
          drag.append(
            "<div class='blockyleft'><img src='assets/errorred.svg'><p class='blockyname'>Prompt an error</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Trigger <span>Error 1</span></div>"
          );
        }
      }
      function drag(block) {
        block.addClass("blockdisabled");
        tempblock2 = block;
      }
      function release() {
        tempblock2.removeClass("blockdisabled");
      }
      $(document).on("click", ".navdisabled", function () {
        $(".navactive").addClass("navdisabled");
        $(".navactive").removeClass("navactive");
        $(this).addClass("navactive");
        $(this).removeClass("navdisabled");
        if ($(this).attr("id") == "triggers") {
          $("#blocklist").html(
            '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>'
          );
        } else if ($(this).attr("id") == "actions") {
          $("#blocklist").html(
            '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/database.svg"></div><div class="blocktext">                        <p class="blocktitle">New database entry</p><p class="blockdesc">Adds a new entry to a specified database</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/database.svg"></div><div class="blocktext">                        <p class="blocktitle">Update database</p><p class="blockdesc">Edits and deletes database entries and properties</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Perform an action</p><p class="blockdesc">Performs or edits a specified action</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="8"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/twitter.svg"></div><div class="blocktext">                        <p class="blocktitle">Make a tweet</p><p class="blockdesc">Makes a tweet with a specified query</p>        </div></div></div>'
          );
        } else if ($(this).attr("id") == "loggers") {
          $("#blocklist").html(
            '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="9"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Add new log entry</p><p class="blockdesc">Adds a new log entry to this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="10"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Update logs</p><p class="blockdesc">Edits and deletes log entries in this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="11"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Prompt an error</p><p class="blockdesc">Triggers a specified error</p>        </div></div></div>'
          );
        }
      });
      $("#close").click(function () {
        if (rightcard) {
          rightcard = false;
          $("#properties").removeClass("expanded");
          setTimeout(function () {
            $("#propwrap").removeClass("itson");
          }, 300);
          tempblock.removeClass("selectedblock");
        }
      });
      $("#removeblock").on("click", function () {
        flowy.deleteBlocks();
      });
      $(document).on("mousedown", ".block", function (event) {
        $(document).on("mouseup mousemove", ".block", function handler(event) {
          if (event.type === "mouseup") {
            if (!rightcard) {
              tempblock = $(this);
              rightcard = true;
              $("#properties").addClass("expanded");
              $("#propwrap").addClass("itson");
              tempblock.addClass("selectedblock");
            }
          }
          $(document).off("mouseup mousemove", handler);
        });
      });
    });
  }, [$]);

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
          <div id="triggers" class="navactive">
            Triggers
          </div>
          <div id="actions" class="navdisabled">
            Actions
          </div>
          <div id="loggers" class="navdisabled">
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
      <div id="propwrap">
        <div id="properties">
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
