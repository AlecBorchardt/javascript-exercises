const getTheTitles = function(books) {
    
        let arr = [];
        let len = books.length;
        
        for(let i = (len - 1); i >= 0; i--){
        arr.push(books[i].title);
        }
        return arr.reverse();
        }

// Do not edit below this line
module.exports = getTheTitles;
