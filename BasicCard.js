function BasicCard (parmFront, parmBack) {
	// if object being instantiated without the new keyword make sure the
	// object is instantiated properly without impacting the global scope
	if (!(this instanceof BasicCard)) {
		return new BasicCard(parmFront, parmBack);
	}
	this.front = parmFront;
	this.back = parmBack;
}

module.exports = BasicCard;
