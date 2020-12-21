/*------data------*/

const quoteBank = [
    {
        quote: 'Life is either a daring adventure, or nothing.',
        author: 'Helen Keller'
    },
    {
        quote: 'Quiet people have the loudest minds.',
        author: 'Stephen Hawking'
    },
    {
        quote: 'We are all in the gutter, but some of us are looking at the stars.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'Imagination is more important than knowledge.',
        author: 'Albert Einstein'
    },
    {
        quote: "I'm as proud of what we don't do as I am of what we do.",
        author: 'Steve Jobs'
    },
    {
        quote: 'I don’t care what you think of me. I don’t think of you at all.',
        author: 'Coco Chanel'
    },
    {
        quote: 'The successful warrior is the average man, with laser-like focus.',
        author: 'Bruce Lee'
    },
    {
        quote: "Until we're educating every kid in a fantastic way, until every inner city is cleaned up, there is no shortage of things to do.",
        author: 'Bill Gates'
    },
    {
        quote: 'He who has a why to live can bear almost any how.',
        author: 'Friedrich Nietzche'
    },
    {
        quote: 'Nonviolence is a weapon of the strong.',
        author: 'Mahatma Gandhi'
    },
];

const pathBank = ["M368.009 108.52457C419.466 103.33128 472.531 118.0309 513.8 149.2039C554.6320000000001 180.0469 578.386 227.79399999999998 591.415 277.279C603.883 324.63 603.559 375.044 585.2180000000001 420.444C567.682 463.854 530.063 493.28 492.738 521.544C454.626 550.404 415.17 577.097 368.009 584.923C314.154 593.861 252.836 601.259 209.076 568.62C165.41930000000002 536.058 166.12869999999998 472.722 148.4904 421.194C130.4814 368.584 85.0515 316.322 104.93578 264.39099999999996C124.8363 212.417 194.257 204.98919999999998 242.137 176.6211C284.20799999999997 151.695 319.355 113.43482 368.009 108.52457Z", "M362.375 100.21666C411.659 103.17241 452.425 138.95510000000002 485.81 175.32920000000001C514.469 206.555 521.808 248.861 535.591 288.942C549.679 329.909 575.658 369.276 567.1089999999999 411.745C558.131 456.354 522.729 489.004 489.144 519.706C451.447 554.168 412.564 608.38 362.375 598.906C310.398 589.0930000000001 307.255 510.95 266.18600000000004 477.616C228.93380000000002 447.379 161.3672 460.283 139.17638 417.745C117.1622 375.545 147.9428 325.589 163.3943 280.57C178.5665 236.366 193.0642 191.2357 227.6926 159.84890000000001C264.983 126.0488 312.13599999999997 97.20361 362.375 100.21666Z", "M337.328 139.2856C383.196 146.1325 435.028 129.6897 471.753 158.0087C508.237 186.1413 505.028 240.302 523.221 282.628C544.072 331.14 598.951 372.637 586.01 423.83C573.135 474.761 508.026 488.732 463.91 517.2529999999999C422.766 543.8530000000001 385.292 574.611 337.328 584.602C279.856 596.5740000000001 212.575 614.602 165.6004 579.392C118.64775 544.198 112.54663 474.758 112.50002 416.08C112.46221 368.467 156.4643 333.928 165.3684 287.155C176.5017 228.673 125.059 151.8092 170.1981 112.9936C214.031 75.30160000000001 280.152 130.7505 337.328 139.2856Z", "M338.51 100.07089C389.577 97.77943 422.697 151.5812 463.037 182.9773C501.688 213.058 549.009 234.775 569.023 279.476C590.1800000000001 326.726 595.903 383.974 574.0450000000001 430.904C553.0409999999999 476 500.166 492.508 457.72 518.452C419.269 541.954 382.381 564.566 338.51 574.869C282.419 588.0409999999999 218.523 617.42 170.25310000000002 585.96C122.0587 554.549 116.21216 485.151 112.74803 427.729C109.87622 380.125 132.48160000000001 337.202 152.6388 293.981C170.224 256.274 193.05610000000001 223.83499999999998 221.846 193.8C257.231 156.88490000000002 287.426 102.36312 338.51 100.07089Z", "M347.332 125.9568C404.062 124.9269 466.057 79.26650000000001 512.754 111.49680000000001C559.312 143.6321 551.696 214.64600000000002 557.3779999999999 270.932C561.922 315.951 550.144 357.941 542.1279999999999 402.473C532.5 455.961 544.52 519.165 505.825 557.327C466.216 596.392 401.287 608.1510000000001 347.332 594.5899999999999C297.131 581.972 272.163 528.656 237.7862 489.957C211.7337 460.629 187.1069 432.275 171.2663 396.387C153.6783 356.541 139.41941 315.876 141.75045 272.38300000000004C144.69855 217.376 141.3495 149.3818 186.2174 117.4246C231.1212 85.4418 292.212 126.9574 347.332 125.9568Z", "M366.611 102.59665C412.239 101.4693909 457.253 110.11410000000001 496.638 133.179C539.242 158.1289 583.2339999999999 189.8837 596.748 237.37C610.114 284.337 578.78 329.803 566.008 376.935C552.347 427.349 554.5550000000001 483.845 519.472 522.5419999999999C480.462 565.5699999999999 424.258 603.942 366.611 596.8720000000001C309.68399999999997 589.8910000000001 278.355 529.61 238.76 488.117C207.007 454.843 180.2986 420.409 159.2099 379.535C133.7612 330.211 85.9996 279.322 103.93339 226.797C121.89150000000001 174.20080000000002 190.92430000000002 163.2474 241.169 139.4905C281.56 120.3927 321.946 103.70011 366.611 102.59665Z", "M349.615 100.93392C403.357 93.83529 456.408 128.2754 493.461 167.8437C527.0609999999999 203.724 523.131 257.793 539.8050000000001 304.03499999999997C557.2909999999999 352.527 611.329 396.711 593.418 445.047C575.389 493.704 504.216 490.515 460.404 518.318C420.733 543.494 396.461 596.154 349.615 599.768C302.195 603.4259999999999 265.072 563.0640000000001 225.671 536.425C184.64409999999998 508.687 135.2202 487.372 115.9163 441.764C95.94332 394.577 99.98191 338.115 122.1876 291.935C143.0381 248.574 194.1164 233.46 230.96 202.517C271.831 168.19209999999998 296.702 107.92302 349.615 100.93392Z", "M380.668 100.01531C432.087 100.98103 472.474 143.08780000000002 507.982 180.2909C538.405 212.16500000000002 560.357 251.456 566.81 295.043C572.5930000000001 334.10400000000004 557.313 371.581 541.671 407.837C527.443 440.817 504.172 466.223 481.088 493.74C449.019 531.967 430.348 595.117 380.668 599.758C331.824 604.321 305.033 543.0840000000001 265.624 513.869C226.7649 485.061 173.76839999999999 472.949 151.6112 429.949C127.92574 383.984 125.87201 327.027 144.4894 278.78499999999997C162.6439 231.743 209.626 205.875 249.83100000000002 175.4425C290.976 144.29829999999998 329.074 99.0462975 380.668 100.01531Z", "M345.422 114.7791C400.008 117.0136 448.691 144.6569 492.68 177.0558C536.405 209.2611 580.357 246.35 595.0419999999999 298.632C609.467 349.98900000000003 589.738 403.142 570.117 452.747C551.629 499.484 530.738 550.172 486.274 573.605C443.69 596.048 392.713 580.1469999999999 345.422 571.169C306.603 563.798 274.504 543.355 238.719 526.6030000000001C191.9665 504.718 123.4559 505.999 104.03249 458.171C84.8454 410.925 139.5896 366.45 153.7889 317.474C168.71519999999998 265.98900000000003 152.3098 203.5821 189.136 164.6301C227.644 123.8989 289.416 112.48648 345.422 114.7791Z", "M363.633 121.00447C408.906 131.3661 428.886 182.83870000000002 467.4 208.7954C508.219 236.30599999999998 575.012 231.402 594.504 276.603C613.825 321.40999999999997 577.684 370.421 555.931 414.099C537.193 451.725 510.391 482.324 478.445 509.643C443.673 539.379 408.795 571.2139999999999 363.633 578.546C313.73699999999997 586.646 255.687 585.722 218.11599999999999 551.905C181.13240000000002 518.617 197.2895 457.836 178.38569999999999 411.808C156.9679 359.65999999999997 92.18834 321.929 100.77975 266.212C109.3261 210.78640000000001 169.38639999999998 178.9415 218.474 151.824C262.858 127.3054 314.206 109.69198 363.633 121.00447Z", "M344.01599999999996 145.8071C380.483 156.9184 404.771 187.4188 438.643 204.9109C481.872 227.235 540.755 222.465 569.072 262.028C599.682 304.797 610.088 366.597 588.7819999999999 414.683C567.8330000000001 461.963 506.741 471.22 463.689 499.868C423.101 526.876 392.713 575.229 344.01599999999996 577.556C294.804 579.9069999999999 250.27 546.856 215.737 511.714C184.8506 480.283 181.5616 433.997 163.4616 393.819C142.20600000000002 346.637 94.28727 307.418 100.56162 256.05C107.07317 202.7407 146.65879999999999 153.0051 195.5821 130.8512C242.019 109.8233 295.254 130.94926 344.01599999999996 145.8071Z", "M321.942 122.7596C373.994 129.7108 429.115 129.6996 470.542 161.9718C511.284 193.7106 523.1510000000001 246.973 542.7370000000001 294.76099999999997C564.2180000000001 347.172 601.698 398.188 590.079 453.625C578.068 510.931 533.946 559.9970000000001 481.635 586.3009999999999C432.88 610.816 375.908 596.558 321.942 588.452C275.964 581.546 229.553 572.617 193.675 543.046C159.1371 514.5799999999999 143.2976 471.601 128.7935 429.26C114.04838 386.215 107.718648 342.95799999999997 109.56121 297.495C112.08346 235.262 93.31 157.5904 141.4077 118.0181C189.061 78.8115 260.776 114.5913 321.942 122.7596Z", "M337.301 103.60356C390.2 114.1146 411.091 177.127 453.608 210.31C493.838 241.708 553.765 247.422 578.654 291.973C605.385 339.823 604.967 399.737 588.6669999999999 452.068C572.2470000000001 504.787 537.547 552.819 489.135 579.375C443.538 604.387 387.937 601.812 337.301 589.953C294.326 579.8879999999999 267.01300000000003 542.0550000000001 229.624 518.598C188.20999999999998 492.616 127.1825 489.718 106.74254 445.307C86.1594 400.584 118.11959999999999 350.849 130.4864 303.196C143.84109999999998 251.736 143.4919 193.211 181.7468 156.292C222.127 117.32169999999999 282.259 92.66677 337.301 103.60356Z", "M353.507 109.00375C407.916 114.8387 428.882 182.9932 471.712 217.053C511.679 248.838 577.092 253.472 595.206 301.216C613.355 349.049 575.3009999999999 398.027 558.741 446.433C542.504 493.894 541.908 553.889 499.563 580.778C457.416 607.54 403.422 577.7629999999999 353.507 576.755C305.049 575.777 255.774 595.071 211.673 574.966C162.4854 552.543 110.9926 514.892 101.19236 461.73C91.48323 409.063 143.6441 367.677 164.3544 318.289C182.6497 274.661 183.6034 224.65699999999998 215.325 189.5582C251.971 149.0115 299.16499999999996 103.17609 353.507 109.00375Z", "M353.01800000000003 127.21363C403.1 122.31742 454.057 132.13616 496.928 158.485C542.1610000000001 186.2855 584.8299999999999 225.595 597.127 277.244C609.094 327.506 581.131 376.652 560.1089999999999 423.848C541.2909999999999 466.097 524.363 515.156 482.449 534.707C442.127 553.5160000000001 397.155 514.825 353.01800000000003 520.4490000000001C297.47900000000004 527.525 250.333 588.637 197.1769 571.057C144.245 553.55 114.69800000000001 492.301 103.05626 437.778C91.98053 385.906 112.83109999999999 333.703 136.3456 286.159C157.0707 244.255 190.5007 212.4092 228.195 184.7572C266.06399999999996 156.9777 306.275 131.78333 353.01800000000003 127.21363Z"];

/*------util------*/

function getRandomPath() {
    return pathBank[Math.floor(Math.random() * pathBank.length)];
}

//convert pathStr into nanchors array
function processPath(pathStr) {
    let anchorArr = pathStr.split(/[MCZ\s]/);
    return anchorArr.filter(str => str !== "" && str !== " ");
}

//convert anchors array to path str
function processAnchors(anchorArr) {
    const PATH_TEMPLATE = ["M", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " ", "C", " ", " ", " ", " ", " "];
    let pathStr = "";
    anchorArr.forEach((coor, i) => {
        pathStr += PATH_TEMPLATE[i];
        pathStr += coor;
    });
    pathStr += "Z";
    return pathStr;
}

function linear(x) {
    return x;
}

//copied from easings.net
function easeOutElastic(x) {
    const C4 = (2 * Math.PI) / 3;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * C4) + 1;
}

function positionOnEasingCurve(n, interval, duration) {
    return interval / duration * n;
}

function extrapolate(y, start, end) {
    const EXPANSION_RATIO = end - start;
    const SHIFT_RATIO = start;
    return y * EXPANSION_RATIO + SHIFT_RATIO;
}

/*------script start------*/

//get element
const tweet = document.querySelector('#twitter');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const refresh = document.querySelector('#refresh');
const orbitPath = document.querySelector('#orbitPath');
const satellite = document.querySelector('#satellite');

//function definition

//1. load new quote
function toggle() {

    let newQuote = "";
    //draw quote
    do {
        newQuote = quoteBank[Math.floor(Math.random() * 10)];
        // console.log(quote.innerHTML, newQuote.quote, newQuote.quote === quote.innerHTML);
    } while (newQuote.quote === quote.innerHTML);
    //update quote
    quote.innerHTML = newQuote.quote;
    author.innerHTML = "- " + newQuote.author;
    //update href in <a> tag to prefill correct quote on tweet
    tweet.parentElement.setAttribute('href', `https://twitter.com/intent/tweet?text=${encodeURI(newQuote.quote + ' -- ' + newQuote.author)}`);
}

//2. animation
const INTERVAL = 20; //50fps
let animate = {
    currentStartPath: orbitPath.children[1].getAttribute('d'),
    currentEndPath: undefined,
    interval: undefined
}; //store morph animation to allow clearing

function orbit() {

    const SPEED = 3;
    // const ADJ_X = (550 - 502) / 2; //due to satellite space being larger than orbit space to prevent cut off of satellite on edge
    // const ADJ_Y = (550 - 502) / 2;

    let orbitStateCount = 0;

    setInterval(() => {

        // if (orbitStateCount % 10 === 0) console.log(orbitStateCount);

        const PATH_LENGTH = orbitPath.children[1].getTotalLength();
        const SEGMENT_NUM = Math.round(PATH_LENGTH / SPEED);
        const ADJ_SPEED = PATH_LENGTH / SEGMENT_NUM;

        const { x, y } = orbitPath.children[1].getPointAtLength(orbitStateCount * ADJ_SPEED);


        satellite.setAttribute('cx', x);
        satellite.setAttribute('cy', y);

        if (orbitStateCount >= SEGMENT_NUM) {
            orbitStateCount = 0;
        } else {
            orbitStateCount++;
        }

    }, INTERVAL);

}

function morph() {

    const DURATION = 4000;
    const FRAMES = DURATION / INTERVAL;

    //get start & end path
    const startPath = orbitPath.children[1].getAttribute('d');
    let endPath = '';
    do {
        endPath = getRandomPath();
    } while (endPath === animate.currentStartPath || endPath === animate.currentEndPath);

    //if currentEndPath exist from previous animation, set previous end as curren start
    if (animate.currentEndPath) animate.currentStartPath = animate.currentEndPath;
    //currentEndPath is always the randomized endPath
    animate.currentEndPath = endPath;
    //if trigger in the middle of the morph, clear previous morph
    if (animate.interval) clearInterval(animate.interval);
    let frameCount = 0;

    //recalculate path for each interval
    animate.interval = setInterval(() => {

        if (frameCount === 0) {
            orbitPath.children[1].setAttribute('d', startPath);
            animate.currentStartPath = startPath;
            frameCount++;

        } else if (frameCount === FRAMES) {
            orbitPath.children[1].setAttribute('d', endPath);
            frameCount = 0;
            clearInterval(animate.interval);

        } else {
            //convert path to number arrays
            const startAnchors = processPath(startPath);
            const endAnchors = processPath(endPath);
            //determine progress of animation
            const currentPosition = positionOnEasingCurve(frameCount, INTERVAL, DURATION);
            const currentValue = easeOutElastic(currentPosition);
            //extrapolate current value for each start-end anchor pairs
            const stateAnchors = [];
            for (let i = 0; i < startAnchors.length; i++) {
                const startAnchor = Number(startAnchors[i]);
                const endAnchor = Number(endAnchors[i]);
                stateAnchors[i] = extrapolate(currentValue, startAnchor, endAnchor);
            }
            //convert intermediate state anchors arr into path
            const statePath = processAnchors(stateAnchors);
            orbitPath.children[1].setAttribute('d', statePath);
            frameCount++;
        }

    }, INTERVAL);

}

//do these on load
window.onload = () => {
    toggle();
    orbitPath.children[1].setAttribute('d', getRandomPath());
    orbit();
    // satellite.setAttribute('fill', "url(#grad1)");
};

//do these on refresh
refresh.addEventListener('click', () => {
    toggle();
    morph();
});