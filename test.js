console.log('hello world');


let warehouse = {};

function no_product_exists(newID){
	//console.log(warehouse[newID])
	if (warehouse[newID] === undefined){
		return true;
	}
	else{
		return false;
	}
}

function new_product(newID){
	let product = {id: newID, count: 1};
	return product
}

function add_product(newID){
	console.log('Adding Product');
	if(no_product_exists(newID)){
		let np = new_product(newID);
		console.log(np);
		warehouse[newID] = np;
	}
	else{ // product exists
		warehouse[newID].count += 1;
	}

	return warehouse[newID].count;
}

function ship_product(){

}



