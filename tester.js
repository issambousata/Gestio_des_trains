let o = [5,6,7,2,8,7]
for(let s of o){
    for(let i=0 ; i<o.length-1 ; i++){
        if(o[i] > o[i+1]){
            let d = o[i]
            o[i] = o[i+1]
            o[i+1] = d 
        }
    }
}
console.log(o);
