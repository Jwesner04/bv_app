// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
