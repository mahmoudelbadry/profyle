require('awesomebar').add({
	keyword: ':',
	onSearch:profyle,
	noSpace: true
});


function profyle(query,suggest){
	suggest({
		title: "Github: " + query,
		url: "https://github.com/"+query
	});
}



