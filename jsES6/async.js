const fetchData=()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done');
        },1500)
    })
    return promise;
}
setTimeout(()=>{
    console.log('timer is done');
    fetchData()
    .then(text=>{
        console.log(text);
        return fetchData();
    })
},2000);
console.log('hello')

// const fetchData=callback=>{
//     setTimeout(()=>{
//         callback('Done');
//     },1500)
// }
// setTimeout(()=>{
//     console.log('timer is done');
//     fetchData(text=>{
//         console.log(text);

//     }
//     )
// },2000);
// console.log('hello')