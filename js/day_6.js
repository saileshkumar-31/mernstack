const fetchAPI = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data.users[0]);
        const filteredad = data.users.filter((e) => e.id < 5);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchAPI();

const fetchAPI2 = async () => {
    try{
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const mapArr = data.users.map((e)=> e.id<5{
            return{
                name: e.firstName,
                email: e.email,
                city: e.address.city
            }
        })
        console.log(mapArr);
    }catch(err){
        console.error("Error fetching data:", err);
    }
}

fetchAPI2();