// Array.filter ()->returns subarray according to given condition
const books=[
    {
        title: 'Book 1',
        author:'Author 1',
        type:"SciFI"
    },
    {
        title: 'Book 2',
        author:'Author 2',
        type:"commic"
    },
    {
        title: 'Book 3',
        author:'Author 3',
        type:"SciFI"
    },
    {
        title: 'Book 4',
        author:'Author 4',
        type:"comic"
    }
]
const selectedBooks=books.filter((books)=>{
    return books.type==="SciFI"
})
console.log(selectedBooks)
// [
//     { title: 'Book 1', author: 'Author 1', type: 'SciFI' },
//     { title: 'Book 3', author: 'Author 3', type: 'SciFI' }
//]