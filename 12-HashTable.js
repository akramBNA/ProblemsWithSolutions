// Description:

//Write a JS code that implement hash table.
//It doesn't need to worry about collisions
//It should have hashing, get, set, and remove methods

// Solution:

export default class hashTable {
	constructor(){
		this.memory=[]
	}
	hashKey(key){
		let hash=0
		for(let i=0; i<key.length;i++){
			const code = key.charCodeAt(i)
			hash= ((hash << 5) - hash + code ) | 0
		}
		return hash
	}
	get(key) {
    const addr = this.hashKey(key)
    return this.memory[addr]
  }

  set(key, value) {
    const addr = this.hashKey(key)
    this.memory[addr] = value
  }

  remove(key) {
    const addr = this.hashKey(key)
    if (this.memory[addr]) {
      delete this.memory[addr]
    }
  }
}
