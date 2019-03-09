import { useState, useEffect } from 'react';


export function useWidth(theme) {
	const [info, fn] = useState({});
    const state = {}
	const filter = theme.breakpoints.keys;
	for (const propName of filter){
		const obj = state[propName] = {};
		obj.value = theme.breakpoints.values[propName];
		obj.name = propName;
		obj.only = theme.breakpoints.only(propName).replace(/^@media\s+(.*)$/,'$1');
		obj.up = theme.breakpoints.up(propName).replace(/^@media\s+(.*)$/,'$1');
		obj.down = theme.breakpoints.down(propName).replace(/^@media\s+(.*)$/,'$1');
		obj.mql = window.matchMedia(obj.only);
		obj.listener = function(e) {
			this.matched = e.matches;
			if (e.matches){
               fn ({ width: this.name, media: this.only});
			}
		}.bind(obj);
		obj.register = function() {
			this.mql.addListener( this.listener );
		}.bind(obj);
		obj.unregister = function() {
			this.mql.removeListener( this.listener );
		}.bind(obj);
		obj.register();
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