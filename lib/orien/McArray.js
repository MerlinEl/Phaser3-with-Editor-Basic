
class McArray{

    _arr = [];
    _index = 0;
    constructor(arr){
        this._arr = arr;
    }
    getNext(){

        var nextIndex = this._index + 1;
        if (nextIndex < this._arr.length){

            this._index = nextIndex;
            return this._arr[nextIndex];
        }
        this._index = 0;
        return this._arr[this._index] // else return first element
    }
    getPrev(){

        var prevIndex = this._index - 1;
        if (prevIndex > -1){

            this._index = prevIndex;
            return this._arr[prevIndex];
        }
        this._index = this._arr.length-1;
        return this._arr[this._index] // else return last element
    }
}