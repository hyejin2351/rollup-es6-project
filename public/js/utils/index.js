function type(o) { return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() }

export default type;
