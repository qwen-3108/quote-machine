const fs = require('fs');

const blobs = [
    {
        w: 502,
        h: 487,
        d: "M269.009 2.02457C320.466 -3.16872 373.531 11.5309 414.8 42.7039C455.632 73.5469 479.386 121.294 492.415 170.779C504.883 218.13 504.559 268.544 486.218 313.944C468.682 357.354 431.063 386.78 393.738 415.044C355.626 443.904 316.17 470.597 269.009 478.423C215.154 487.361 153.836 494.759 110.076 462.12C66.4193 429.558 67.1287 366.222 49.4904 314.694C31.4814 262.084 -13.9485 209.822 5.93578 157.891C25.8363 105.917 95.257 98.4892 143.137 70.1211C185.208 45.195 220.355 6.93482 269.009 2.02457Z"
    },
    {
        w: 439,
        h: 502,
        d: "M231.875 1.21666C281.159 4.17241 321.925 39.9551 355.31 76.3292C383.969 107.555 391.308 149.861 405.091 189.942C419.179 230.909 445.158 270.276 436.609 312.745C427.631 357.354 392.229 390.004 358.644 420.706C320.947 455.168 282.064 509.38 231.875 499.906C179.898 490.093 176.755 411.95 135.686 378.616C98.4338 348.379 30.8672 361.283 8.67638 318.745C-13.3378 276.545 17.4428 226.589 32.8943 181.57C48.0665 137.366 62.5642 92.2357 97.1926 60.8489C134.483 27.0488 181.636 -1.79639 231.875 1.21666Z"
    },
    {
        w: 477,
        h: 502,
        d: "M225.828 40.2856C271.696 47.1325 323.528 30.6897 360.253 59.0087C396.737 87.1413 393.528 141.302 411.721 183.628C432.572 232.14 487.451 273.637 474.51 324.83C461.635 375.761 396.526 389.732 352.41 418.253C311.266 444.853 273.792 475.611 225.828 485.602C168.356 497.574 101.075 515.602 54.1004 480.392C7.14775 445.198 1.04663 375.758 1.00002 317.08C0.96221 269.467 44.9643 234.928 53.8684 188.155C65.0017 129.673 13.559 52.8092 58.6981 13.9936C102.531 -23.6984 168.652 31.7505 225.828 40.2856Z"
    },
    {
        w: 477,
        h: 502,
        d: "M227.01 1.07089C278.077 -1.22057 311.197 52.5812 351.537 83.9773C390.188 114.058 437.509 135.775 457.523 180.476C478.68 227.726 484.403 284.974 462.545 331.904C441.541 377 388.666 393.508 346.22 419.452C307.769 442.954 270.881 465.566 227.01 475.869C170.919 489.041 107.023 518.42 58.7531 486.96C10.5587 455.549 4.71216 386.151 1.24803 328.729C-1.62378 281.125 20.9816 238.202 41.1388 194.981C58.724 157.274 81.5561 124.835 110.346 94.8C145.731 57.8849 175.926 3.36312 227.01 1.07089Z"
    },
    {
        w: 419,
        h: 502,
        d: "M206.832 26.9568C263.562 25.9269 325.557 -19.7335 372.254 12.4968C418.812 44.6321 411.196 115.646 416.878 171.932C421.422 216.951 409.644 258.941 401.628 303.473C392 356.961 404.02 420.165 365.325 458.327C325.716 497.392 260.787 509.151 206.832 495.59C156.631 482.972 131.663 429.656 97.2862 390.957C71.2337 361.629 46.6069 333.275 30.7663 297.387C13.1783 257.541 -1.08059 216.876 1.25045 173.383C4.19855 118.376 0.8495 50.3818 45.7174 18.4246C90.6212 -13.5582 151.712 27.9574 206.832 26.9568Z"
    },
    {
        w: 502,
        h: 497,
        d: "M267.611 1.09665C313.239 -0.0306091 358.253 8.6141 397.638 31.679C440.242 56.6289 484.234 88.3837 497.748 135.87C511.114 182.837 479.78 228.303 467.008 275.435C453.347 325.849 455.555 382.345 420.472 421.042C381.462 464.07 325.258 502.442 267.611 495.372C210.684 488.391 179.355 428.11 139.76 386.617C108.007 353.343 81.2986 318.909 60.2099 278.035C34.7612 228.711 -13.0004 177.822 4.93339 125.297C22.8915 72.7008 91.9243 61.7474 142.169 37.9905C182.56 18.8927 222.946 2.20011 267.611 1.09665Z"
    },
    {
        w: 496,
        h: 502,
        d: "M247.615 1.93392C301.357 -5.16471 354.408 29.2754 391.461 68.8437C425.061 104.724 421.131 158.793 437.805 205.035C455.291 253.527 509.329 297.711 491.418 346.047C473.389 394.704 402.216 391.515 358.404 419.318C318.733 444.494 294.461 497.154 247.615 500.768C200.195 504.426 163.072 464.064 123.671 437.425C82.6441 409.687 33.2202 388.372 13.9163 342.764C-6.05668 295.577 -2.01809 239.115 20.1876 192.935C41.0381 149.574 92.1164 134.46 128.96 103.517C169.831 69.1921 194.702 8.92302 247.615 1.93392Z"
    },
    {
        w: 438,
        h: 502,
        d: "M249.668 1.01531C301.087 1.98103 341.474 44.0878 376.982 81.2909C407.405 113.165 429.357 152.456 435.81 196.043C441.593 235.104 426.313 272.581 410.671 308.837C396.443 341.817 373.172 367.223 350.088 394.74C318.019 432.967 299.348 496.117 249.668 500.758C200.824 505.321 174.033 444.084 134.624 414.869C95.7649 386.061 42.7684 373.949 20.6112 330.949C-3.07426 284.984 -5.12799 228.027 13.4894 179.785C31.6439 132.743 78.626 106.875 118.831 76.4425C159.976 45.2983 198.074 0.0462975 249.668 1.01531Z"
    },
    {
        w: 502,
        h: 473,
        d: "M246.422 1.2791C301.008 3.5136 349.691 31.1569 393.68 63.5558C437.405 95.7611 481.357 132.85 496.042 185.132C510.467 236.489 490.738 289.642 471.117 339.247C452.629 385.984 431.738 436.672 387.274 460.105C344.69 482.548 293.713 466.647 246.422 457.669C207.603 450.298 175.504 429.855 139.719 413.103C92.9665 391.218 24.4559 392.499 5.03249 344.671C-14.1546 297.425 40.5896 252.95 54.7889 203.974C69.7152 152.489 53.3098 90.0821 90.136 51.1301C128.644 10.3989 190.416 -1.01352 246.422 1.2791Z"
    },
    {
        w: 502,
        h: 467,
        d: "M264.633 4.50447C309.906 14.8661 329.886 66.3387 368.4 92.2954C409.219 119.806 476.012 114.902 495.504 160.103C514.825 204.91 478.684 253.921 456.931 297.599C438.193 335.225 411.391 365.824 379.445 393.143C344.673 422.879 309.795 454.714 264.633 462.046C214.737 470.146 156.687 469.222 119.116 435.405C82.1324 402.117 98.2895 341.336 79.3857 295.308C57.9679 243.16 -6.81166 205.429 1.77975 149.712C10.3261 94.2864 70.3864 62.4415 119.474 35.324C163.858 10.8054 215.206 -6.80802 264.633 4.50447Z"
    },
    {
        w: 502,
        h: 458,
        d: "M245.016 24.8071C281.483 35.9184 305.771 66.4188 339.643 83.9109C382.872 106.235 441.755 101.465 470.072 141.028C500.682 183.797 511.088 245.597 489.782 293.683C468.833 340.963 407.741 350.22 364.689 378.868C324.101 405.876 293.713 454.229 245.016 456.556C195.804 458.907 151.27 425.856 116.737 390.714C85.8506 359.283 82.5616 312.997 64.4616 272.819C43.206 225.637 -4.71273 186.418 1.56162 135.05C8.07317 81.7407 47.6588 32.0051 96.5821 9.8512C143.019 -11.1767 196.254 9.94926 245.016 24.8071Z"
    },
    {
        w: 486,
        h: 502,
        d: "M214.942 23.7596C266.994 30.7108 322.115 30.6996 363.542 62.9718C404.284 94.7106 416.151 147.973 435.737 195.761C457.218 248.172 494.698 299.188 483.079 354.625C471.068 411.931 426.946 460.997 374.635 487.301C325.88 511.816 268.908 497.558 214.942 489.452C168.964 482.546 122.553 473.617 86.675 444.046C52.1371 415.58 36.2976 372.601 21.7935 330.26C7.04838 287.215 0.718648 243.958 2.56121 198.495C5.08346 136.262 -13.69 58.5904 34.4077 19.0181C82.061 -20.1885 153.776 15.5913 214.942 23.7596Z"
    },
    {
        w: 502,
        h: 500,
        d: "M238.301 3.60356C291.2 14.1146 312.091 77.127 354.608 110.31C394.838 141.708 454.765 147.422 479.654 191.973C506.385 239.823 505.967 299.737 489.667 352.068C473.247 404.787 438.547 452.819 390.135 479.375C344.538 504.387 288.937 501.812 238.301 489.953C195.326 479.888 168.013 442.055 130.624 418.598C89.21 392.616 28.1825 389.718 7.74254 345.307C-12.8406 300.584 19.1196 250.849 31.4864 203.196C44.8411 151.736 44.4919 93.211 82.7468 56.292C123.127 17.3217 183.259 -7.33323 238.301 3.60356Z"
    },
    {
        w: 502,
        h: 485,
        d: "M254.507 1.50375C308.916 7.3387 329.882 75.4932 372.712 109.553C412.679 141.338 478.092 145.972 496.206 193.716C514.355 241.549 476.301 290.527 459.741 338.933C443.504 386.394 442.908 446.389 400.563 473.278C358.416 500.04 304.422 470.263 254.507 469.255C206.049 468.277 156.774 487.571 112.673 467.466C63.4854 445.043 11.9926 407.392 2.19236 354.23C-7.51677 301.563 44.6441 260.177 65.3544 210.789C83.6497 167.161 84.6034 117.157 116.325 82.0582C152.971 41.5115 200.165 -4.32391 254.507 1.50375Z"
    },
    {
        w: 502,
        h: 450,
        d: "M254.018 2.21363C304.1 -2.68258 355.057 7.13616 397.928 33.485C443.161 61.2855 485.83 100.595 498.127 152.244C510.094 202.506 482.131 251.652 461.109 298.848C442.291 341.097 425.363 390.156 383.449 409.707C343.127 428.516 298.155 389.825 254.018 395.449C198.479 402.525 151.333 463.637 98.1769 446.057C45.245 428.55 15.698 367.301 4.05626 312.778C-7.01947 260.906 13.8311 208.703 37.3456 161.159C58.0707 119.255 91.5007 87.4092 129.195 59.7572C167.064 31.9777 207.275 6.78333 254.018 2.21363Z"
    },
];

function toCoorArr(pathStr) {
    // console.log('pathStr', pathStr);
    let coorArr = pathStr.split(/[MCZ\s]/);
    coorArr = coorArr.filter(coor => coor !== "" && coor !== " ");
    coorArr = coorArr.map(coor => Number(coor));
    // console.log('coorArr', coorArr);
    return coorArr;
}

function toPathStr(coorArr) {

    const pathTemplate = ["M", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " "];

    let pathStr = "";
    coorArr.forEach((coor, i) => {

        pathStr += pathTemplate[i];
        pathStr += coor;
    });

    pathStr += "Z";

    return pathStr;

}

//write file

fs.appendFileSync('centered_blobs.js', 'const pathBank = [');

blobs.forEach((blob) => {
    const pathArr = toCoorArr(blob.d);

    // let ADJ = 0;
    // if (blob.w === 502) {
    //     //center along y direction
    //     ADJ = (502 - blob.h) / 2;
    //     pathArr.forEach((coor, i) => {
    //         if (i % 2 === 1) {
    //             pathArr[i] = pathArr[i] + ADJ;
    //         }
    //     });
    // } else {
    //     //center along x direction
    //     ADJ = (502 - blob.w) / 2;
    //     pathArr.forEach((coor, i) => {
    //         if (i % 2 === 0) {
    //             pathArr[i] = pathArr[i] + ADJ;
    //         }
    //     });
    // }

    const ADJ_X = (700 - blob.w) / 2;
    const ADJ_Y = (700 - blob.h) / 2;

    //dump into larger canvas
    pathArr.forEach((coor, i) => {
        pathArr[i] = i % 2 === 0 ? coor + ADJ_X : coor + ADJ_Y;
    })


    let pathStr = toPathStr(pathArr);
    fs.appendFileSync('centered_dumped_blobs.js', `"${pathStr}", `);
});