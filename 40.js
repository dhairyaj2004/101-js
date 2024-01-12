//LOCAL STORAGE and SESSION STORAGE 
    const obj={
        name:"Dj",
        age:20
    }
    localStorage.setItem('obj',JSON.stringify(obj))
    const data=localStorage.getItem('obj')
    const originalData=JSON.parse(data)
    console.log(originalData)
    const tempObj={
        name:"tempDJ",
        age:20
    }
    sessionStorage.setItem('tempObj',JSON.stringify(tempObj))
    let tempData=sessionStorage.getItem('tempObj')
    const tempOriginalData=JSON.parse(tempData)
    console.log(tempOriginalData)
//1.run this code on browser
//2.In that tab u will be able to see both data
//3.open new tab and without running the code check your local and session storage.
//4.in new tab your local storage still has that data but your session storage will be empty.