function hamming(a,b) {
	//console.log(a.length);
	return a.split('').reduce( (res,cur,index)=>{
		return (a[index] != b[index]) ? res+1 : res
	}, 0);
}


console.log(hamming("I like turtles","I like turkeys"));