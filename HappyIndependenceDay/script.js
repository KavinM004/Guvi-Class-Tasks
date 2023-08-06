// JavaScript code
function display() {
  // Function to display content in HTML
  function updateOutput(content) {
      let outputElement = document.getElementById('output');
      if (outputElement) {
          outputElement.innerHTML += content + '<br>';
      }
  }

  setTimeout(() => {
      updateOutput("10");

      setTimeout(() => {
          updateOutput("9");

          setTimeout(() => {
              updateOutput("8");

              setTimeout(() => {
                  updateOutput("7");

                  setTimeout(() => {
                      updateOutput("6");

                      setTimeout(() => {
                          updateOutput("5");

                          setTimeout(() => {
                              updateOutput("4");

                              setTimeout(() => {
                                  updateOutput("3");

                                  setTimeout(() => {
                                      updateOutput("2");

                                      setTimeout(() => {
                                          updateOutput("1");

                                          setTimeout(() => {
                                              updateOutput("Happy Independence Day");
                                          }, 1000);
                                      }, 1000);
                                  }, 1000);
                              }, 1000);
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
          }, 1000);
      }, 1000);
  }, 0);
}

display();

  