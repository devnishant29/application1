import React from "react";
import "./Description.scss";

const items = [
  {
    number: "1",
    imagelink1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7306664779ae5765ddf4dcc1d9f9d0804bde18d831eadcc46bc3ac6cfa1255bf?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text1: "Best Choice",
    imagelink2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text2: "Builder 1",
    text3: "WixPro 72-Inch Responsive Website Builder",
    text4:
      " - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    text5: "Main highlights",
    text6:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    text7: "Show more",
    imagelink3:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e3f938376029e2d95dee3aaef4f65da86dfa20d582dcccbe39315bea454c1?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    imagelink4:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e188f6968106780db7d77aa7e5321b2ef29a89534ab47d98f1ceec873bc952b1?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text8: "9.8",
    text9: "Exceptional",
    imagelink5:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/222f6c868ea3fee167b114315f72133048eeea19c71f12854389178e409dbb13?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text10: "View",
  },
  {
    number: "2",
    imagelink1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f0930a3c57c8979fbaf8e95872010a8505cf6301f40a1efe1e38942eda28504a?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text1: "Best Value",
    imagelink2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text2: "Builder 2",
    text3: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    text4:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    text5: "Main highlights",
    text6:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    text7: "Show more",
    imagelink3:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e3f938376029e2d95dee3aaef4f65da86dfa20d582dcccbe39315bea454c1?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    imagelink4:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1c68a35ec2d246b6cd333cd9fa46f855899f578b590774794546151ba1e18d81?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text8: "9.5",
    text9: "Excellent",
    imagelink5:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b2015d29b73701a82989ae7d462c859c54e8c389612c8891e516ca766567cdc9?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text10: "View",
  },
  {
    number: "3",
    imagelink1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d77f9d85dbc87dec50925f9a339930e801bb67ab04f59201965b1a4e62dbf308?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text1: "Best Value",
    imagelink2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text2: "Builder 3",
    text3: " WixPro 72-Inch Responsive Website Builder",
    text4:
      " - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    text5: "Main highlights",
    text6:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    text7: "Show more",
    imagelink3: "",
    imagelink4: "",
    text8: "9.3",
    text9: "Exceptional",
    imagelink5:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b2015d29b73701a82989ae7d462c859c54e8c389612c8891e516ca766567cdc9?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&",
    text10: "View",
  },
];

function Description() {
  return (
    <>
      <div
        className="DescriptionContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 30px 0 30px",
        }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <div className="ItemNumber">
              <div style={{ padding: "8px 0px 0px 18px" }}>{item.number}</div>
            </div>
            <div className="DescriptionItemsContainer">
              <div className="DescriptionItems">
                <div className="column">
                  <div className="ItemClassContainer">
                    <div className="ItemClass">
                      {item.number === 1 && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.375 1.6665C4.375 1.32133 4.65482 1.0415 5 1.0415H15C15.3452 1.0415 15.625 1.32133 15.625 1.6665V7.35278C15.625 10.5234 13.1236 13.1248 10 13.1248C6.87644 13.1248 4.375 10.5234 4.375 7.35278V1.6665ZM5.625 2.2915V7.35278C5.625 9.86744 7.60071 11.8748 10 11.8748C12.3993 11.8748 14.375 9.86744 14.375 7.35278V2.2915H5.625Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.0415 4.58301C1.0415 4.23783 1.32133 3.95801 1.6665 3.95801H4.99984C5.34502 3.95801 5.62484 4.23783 5.62484 4.58301V8.74967C5.62484 9.09485 5.34502 9.37467 4.99984 9.37467C2.92768 9.37467 1.0415 7.64239 1.0415 4.58301ZM2.32395 5.20801C2.50507 6.88881 3.41739 7.77588 4.37484 8.03944V5.20801H2.32395Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.375 4.58301C14.375 4.23783 14.6548 3.95801 15 3.95801H18.3333C18.6785 3.95801 18.9583 4.23783 18.9583 4.58301C18.9583 7.64239 17.0722 9.37467 15 9.37467C14.6548 9.37467 14.375 9.09485 14.375 8.74967V4.58301ZM15.625 5.20801V8.03944C16.5824 7.77588 17.4948 6.88881 17.6759 5.20801H15.625Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 12.708C10.3452 12.708 10.625 12.9878 10.625 13.333V14.9997C10.625 15.3449 10.3452 15.6247 10 15.6247C9.65482 15.6247 9.375 15.3449 9.375 14.9997V13.333C9.375 12.9878 9.65482 12.708 10 12.708Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.25514 14.6726C7.36887 14.4877 7.57042 14.375 7.78752 14.375H12.101C12.3111 14.375 12.5071 14.4805 12.6228 14.6559L14.2717 17.1559C14.3983 17.3478 14.4093 17.5938 14.3003 17.7963C14.1913 17.9987 13.9799 18.125 13.75 18.125H6.25C6.0236 18.125 5.81491 18.0026 5.70445 17.805C5.59398 17.6073 5.59902 17.3654 5.71762 17.1726L7.25514 14.6726ZM8.13687 15.625L7.36812 16.875H12.5891L11.7646 15.625H8.13687Z"
                            fill="white"
                          />
                        </svg>
                      )}
                      <img
                        loading="lazy"
                        src={item.imagelink1}
                        className="img-8"
                        alt=""
                      />
                      <div className="div-43">{item.text1}</div>
                    </div>
                    <div className="div-44">
                      <svg
                        width="141"
                        height="103"
                        viewBox="0 0 141 103"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect width="141" height="103" fill="url(#pattern0)" />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_601_408"
                              transform="matrix(0.00386506 0 0 0.00529101 -0.0159856 0)"
                            />
                          </pattern>
                          <image
                            id="image0_601_408"
                            width="267"
                            height="189"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

                      <div className="div-45">{item.text2}</div>
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-46">
                    <div className="div-47">
                      <span style={{ fontWeight: "700" }}>{item.text3}</span>
                      {item.text4}
                    </div>
                    <div className="div-48">{item.text5}</div>
                    <div className="div-49">{item.text6}</div>
                    <div className="div-50">
                      <div className="div-51">{item.text7}</div>
                      <img
                        loading="lazy"
                        src={item.imagelink3}
                        className="img-10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="column-3">
                  <div className="div-52">
                    <div className="div-53">
                      <img
                        loading="lazy"
                        src={item.imagelink4}
                        className="img-11"
                        alt=""
                      />
                      <div className="div-54">{item.text8}</div>
                      <div className="div-55">{item.text9}</div>
                      <img
                        loading="lazy"
                        src={item.imagelink5}
                        className="img-12"
                        alt=""
                      />
                    </div>
                    <div className="div-56">{item.text10}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Description;
