import { useState, useEffect } from 'react';

export function useWidth(theme) {
	const [info, fn] = useState({});
    const state = {}
	const filter = theme.breakpoints.keys;
	for (const propName of filter){
		const obj = state[propName] = {};
		obj.name = propName;
		obj.only = theme.breakpoints.only(propName).replace(/^@media\s+(.*)$/,'$1');
		console.log(obj.only)
		obj.mql = window.matchMedia(obj.only);
		
		obj.listener = function(e) {
			this.matched = e.matches;
			if (e.matches){
               fn ({ width: this.name, media: this.only}); // set the new state if matches
			}
		}.bind(obj);
		
		obj.unregister = function() {
			this.mql.removeListener( this.listener );
		}.bind(obj);
		
		obj.mql.addListener( obj.listener );

		if (obj.mql.matches && info.width !== obj.name) {
			/* the addition of media property is only for description/debug/trace puproposes */
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