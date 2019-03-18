function nrP(nr) {
	return {
		hostname: 'www.jacob-bogers.com',
		port: 80,
		path: `/sl/sdj/photos/photo-${nr}sjb.zip`
	};
}

function nrV(nr) {
    return {
        hostname: 'www.jacob-bogers.com',
        port: 80, 
        path: `/sl/sdj/photos/photo-${nr}sjb.zip`,
    }
}

module.exports = {
    nrV,
    nrP
}