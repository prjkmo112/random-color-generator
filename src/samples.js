var white = () => ({ R:"255",G:"255",B:"255",hex:"#FFFFFF",H:'0',S:'0',L:'100',C:0,M:0,Y:0,K:0});
var black = () => ({ R:"0",G:"0",B:"0",hex:"#000000",H:'0',S:'0',L:'0',C:100,M:100,Y:100,K:100});
var red = () => ({ R:"255",G:"0",B:"0",hex:"#FF0000",H:'0',S:'100',L:'50',C:0,M:100,Y:100,K:0});
var blue = () => ({ R:"0",G:"0",B:"255",hex:"#0000FF",H:'240',S:'100',L:'50',C:100,M:100,Y:0,K:0});
var green = () => ({ R:"0",G:"255",B:"0",hex:"#00FF00",H:'120',S:'100',L:'50',C:100,M:0,Y:100,K:0});


module.exports = { black, white, red, blue, green };