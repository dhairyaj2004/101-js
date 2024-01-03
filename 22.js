//optional chaining
const restaurant={
    name: 'Kabir',
    Location: 'Highway',
    OpeningHours:{
        mon:{
            open: '10 AM',
            close: '10 PM'
        },
        tue:{
            open: '11 AM',
            close: '11 PM'
        }
    }
}
const mondayCheck=console.log(restaurant.OpeningHours.mon.open)//10 AM
// const thrusdayCheck=console.log(restaurant.OpeningHours.thrus.open)
//Throws an error bcz thrus is not given, so to prevent it we can use optional chaining
const fridayCheck=console.log(restaurant.OpeningHours?.fri?.open)//we addedd ? before friday and same for open we will get undefined
const thursdayCheck = console.log(restaurant.OpeningHours?.thru?.open  || "We are not serving on thrusday")
//bcz the or's left side will give undefined the other truthy value will be printed