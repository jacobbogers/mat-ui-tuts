import { useState, useEffect } from 'react';

export function useWidth(theme) {
	const [info, fn] = useState({});
    const state = {}
	const filter = theme.breakpoints.keys;
	for (const propName of filter){
		const obj = state[propName] = {};
		obj.name = propName;
		obj.only = theme.breakpoints.only(propName).replace(/^@media\s+(.*)$/,'$1');
		obj.mql = window.matchMedia(obj.only);
		obj.listener = function(e) {
			this.matched = e.matches;
			if (e.matches) {
               fn ({ width: this.name, media: this.only});
			}
		}.bind(obj);
		obj.unregister = function() {
			this.mql.removeListener( this.listener );
		}.bind(obj);
		obj.mql.addListener( obj.listener );
		console.log(`size:${propName}:${obj.only}`);
		if (obj.mql.matches && info.width !== obj.name) {
            fn ({ width: obj.name, media: obj.only});
		}
	}
	// create a function to remove all listeneres
	function removeAll() {
		for (const propName of filter){
			state[propName].unregister();
		}
	}
	useEffect(()=>{
		return removeAll();
	})
	return info;
}