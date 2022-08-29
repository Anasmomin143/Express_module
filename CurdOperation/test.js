try{
    let error=false;
    console.log("first block is printed")
if(error){
    throw'error aya bhai'
}
console.log('error nahi aya ');
}catch(error){
console.log(error)
}finally{
    console.log('error aya to bhi execute hota itta block')
}