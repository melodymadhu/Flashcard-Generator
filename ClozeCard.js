function ClozeCard(parmText, parmCloze) {

	// if object being instantiated without the new keyword make sure the
	// object is instantiated properly without impacting the global scope

	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(parmText, parmCloze);
	}

	//if parmCloze present in parmText then set the properties else throw err
	if (parmText.indexOf(parmCloze) !== -1) {

		this.fulltext = parmText;
		this.cloze = parmCloze;
		this.partial = '... ' +	parmText.replace(parmCloze, "");
	}

	else {
		console.log("Error: Cloze text is not present in the full text that you entered");
	}
}

module.exports = ClozeCard;
