var numtostr = function(num) {
    if (num >= 0 && num < 10)
        return `${num}`;
    return String.fromCharCode(55+num)
}

var rgbtohex = function(rgbcolor) {
    let rhex = numtostr(parseInt(rgbcolor.R/16))+numtostr(rgbcolor.R%16);
    let ghex = numtostr(parseInt(rgbcolor.G/16))+numtostr(rgbcolor.G%16);
    let bhex = numtostr(parseInt(rgbcolor.B/16))+numtostr(rgbcolor.B%16);
    return `#${rhex}${ghex}${bhex}`;
}

var rgbtohsl = function(rgbcolor) {
    let _r = rgbcolor.R/255;
    let _g = rgbcolor.G/255;
    let _b = rgbcolor.B/255;

    let C_max = Math.max(_r, _g, _b);
    let C_min = Math.min(_r, _g, _b);
    let delta = C_max - C_min;
    
    let h,s,l;
    if (delta == 0) h = 0;
    else if (C_max == _r) h = ((_g-_b)/delta)%6;
    else if (C_max == _g) h = (_b-_r)/delta+2;
    else h = (_r-_g)/delta+4;
    h*=60;
    if (h<0) h+=360;

    l = (C_max+C_min)/2;
    if (delta==0)
        s = 0;
    else
        s = delta/(1-Math.abs(2*l-1));
    s*=100;
    l*=100;

    h = h.toFixed(0);
    s = s.toFixed(1);
    l = l.toFixed(1);

    return {H:h,S:s,L:l};
}

var rgbtocmyk = function(rgbcolor) {
    let C,M,Y,K,hex;
    let _r = rgbcolor.R/255;
    let _g = rgbcolor.G/255;
    let _b = rgbcolor.B/255;
    
    K = 1-Math.max(_r, _g, _b);
    if (K == 1) {
        C=M=Y=0;
    } else {
        C = (1-_r-K)/(1-K);
        M = (1-_g-K)/(1-K);
        Y = (1-_b-K)/(1-K);
    }

    C = Math.round(100*C);
    M = Math.round(100*M);
    Y = Math.round(100*Y);
    K = Math.round(100*K);
    
    hex = rgbtohex(rgbcolor);
    
    return { C,M,Y,K };
}

/**
 * @typedef {Object} RGBColorOptions
 * @property {Number} R red color of RGB value (0~255)
 * @property {Number} G green color of RGB value (0~255)
 * @property {Number} B blue color of RGB value (0~255)
 */
/**
 * Return RGB color code
 * @param {RGBColorOptions} rgbColorOptions
 * @returns 
 */
var get = function(rgbColorOptions={}) {
    let R,G,B;
    let rgb = ["R", "G", "B"];
    for (let i in rgb) {
        let num = rgbColorOptions[rgb[i]] === undefined ? parseInt(Math.random() * 255) : rgbColorOptions[rgb[i]];
        if (typeof rgbColorOptions[rgb[i]] === "number") {
            if (rgbColorOptions[rgb[i]] > 255)
                num = 255;
            else if (rgbColorOptions[rgb[i]] < 0)
                num = 0;
        }

        if (rgb[i] === "R") R = `${num}`;
        if (rgb[i] === "G") G = `${num}`;
        if (rgb[i] === "B") B = `${num}`;
    }

    return { R,G,B,hex:rgbtohex({R,G,B}), ...rgbtohsl({R,G,B}), ...rgbtocmyk({R,G,B}) };
}

module.exports = get;