/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 * @usage
        1) Simple way:
            Ctrace("Prefab:", this.name);
        out: Prefab:Card_01

        2) Multiple values:
            Ctrace("dropZone:{0} pos:[{1}, {2}]", dropZone, dropZone.x, dropZone.y);
        out: dropZone:[object Object] pos:[y:1 x:0]

        3) Show properties prepend "@":
            var bounds = {x:dropZone.x, y:dropZone.y, w:dropZone.width, h:dropZone.height};
            Ctrace("bounds:@{0}", bounds);
        out: bounds:Object( h:45 w:45 y:1 x:0 )
 */

var Ctrace = function(){
	
	var args = arguments;
	var out_str = "", str, val;
	
	if (args.length == 0){
	
		return out_str;
	}
	
	var args_array = objectToArray(args);
	
	if (args_array.length == 1){
	
		out_str = args_array[0];

	} else if (args_array.length == 2) {
	
		str = args_array[0];
		val = args_array[1];
		out_str = str.indexOf("{") != -1 ? 
			substitute(str, [val]) :
			str + val;
			
	} else {
	
		str = args_array.shift();
		out_str = substitute(str, args_array);
	}
	console.log(out_str);
	return out_str;
}


// # Local methods
function isArray(val){

	return typeof(val) == "array";
}

function substitute(str, arr) {
		
	var len = arr.length;
	var args = [];
	if (len == 1 && isArray(arr[0])) {
		
		args = arr[0];
		len = args.length;
		
	} else {
		
		args = arr;
	}
	for (var i = 0; i < len; i++) {
		
        var val = args[i];
        // implement object parsing method (to activate add --> @{0} )
        if (str.indexOf("@") != -1) {
            
            var brace_index = str.indexOf("{");
            if (brace_index != -1 && str.charAt(brace_index-1) == "@"){
                
                val = this.parseObject(args[i]);
                str = str.replace("@", "");
            }
        }
		//console.log("\t\t!Ctrace! > value type:"+ typeof(val) + " toString:" + valToSring(val));
        str = str.replace(new RegExp("\\{" + i + "\\}", "g"), valToSring(val));
	}
	return str;
}

function valToSring(val){
	
	if (val == null){

		return "null";

	} else if (val == undefined){

		return "undefined";

	// wee do not show functions body
	} else if (typeof(val) == "function"){

		return "function";

	// inspectable check
	} else if (typeof(val.toString) != "function") {

		return "anonymous";

	} else {

		return val;
	}
}

function objectToArray(obj){

	var arr = [];
	for (var i = 0; i < obj.length; i++) {
		
		arr.push(obj[i]);
	}
	return arr
}

function parseObject(obj, obj_name = "Object", inline = true, max_chars = 20) {
    
    var out_str = obj_name+"(" + (inline ? "" : "\n");
    var obj_data = [];
    for (var k in obj) obj_data.push( { key:k, val:obj[k] } );
    obj_data.reverse();
    obj_data.forEach(function (data, ...args) {
        
        var key = String(data.key);
        var val = String(data.val);
        if (val.length > max_chars) val = val.substr(0, max_chars)+'...'; // shorten values length to max_chars
        out_str += (inline ? " " : "\t") + key + ":" + val + (inline ? "" : "\n"); 
    })
    if (!inline) out_str = out_str.substring(0, out_str.length - 1); //remove last enter
    out_str += " )"
    return out_str;
}