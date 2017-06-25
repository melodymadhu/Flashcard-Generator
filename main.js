var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

switch (process.argv[2]) {
	case 'basic' :
		switch (process.argv[3]) {
			case 'new' :
				var simpleCard = new BasicCard(process.argv[4], process.argv[5]);
				break;
			case 'nonew' :
				var simpleCard = BasicCard(process.argv[4], process.argv[5]);	
				break;
			default :
				console.log('Fourth word in the command should be new OR nonew');
		}
		if (simpleCard instanceof BasicCard) {
			console.log("\nConsole Logging the object\n");
			console.log(simpleCard);
			console.log("\nConsole Logging the object's properties\n");
			console.log('front is : ' + simpleCard.front);
			console.log('back is : '+ simpleCard.back);	
		}
			
	break;

	case 'cloze' :
		switch (process.argv[3]) {
			case 'new' :
				var complexCard = new ClozeCard(process.argv[4], process.argv[5]);
				break;
			case 'nonew' :
				var complexCard = ClozeCard(process.argv[4], process.argv[5]);	
				break;
			default :
				console.log('Fourth word in the command should be new OR nonew');
		}

		if (complexCard instanceof ClozeCard) {
			console.log("\nConsole Logging the object\n");
			console.log(complexCard);
			console.log("\nConsole Logging the object's properties\n");
			console.log('partial text is : ' + complexCard.partial);
			console.log('cloze text is : '+ complexCard.cloze);
			console.log('full text is : '+ complexCard.fulltext);
		}
			
	break;

	default:
	console.log('please enter basic or cloze card type');
}


