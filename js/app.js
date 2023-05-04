let profiles = [
   {
        username: 'eva',
        gender : 'Female',
        age: 24,
        birthday: '04 February 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        age: 24,
        birthday: '04 May 1996',
    },
    {
        username: 'Majd',
        gender : 'Female',
        age: 24,
        birthday: '04 May 1999',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        age: 24,
        birthday: '05 May 1990',
    }
]

let profilesContainer = document.getElementById('birthday__profile-container')
let currentDate= new Date();
let  month = currentDate.toLocaleString('default', { month: 'long' });
let day = currentDate.getDay();
let year = currentDate.getFullYear();
let maleProfile=['assets/img/male.png','assets/img/male-2.png','assets/img/male-3.png']
let femaleProfile=['assets/img/female.png','assets/img/female-2.png','assets/img/female-3.png']
console.log(day)
console.log(month);
console.log(year);
console.log(currentDate);
for(let profile of profiles){
 let  birthday = profile.birthday.split(' ')
    if(birthday[1] === month && birthday[0] == day ){
    //Way 1 : The easy way
         randompic=[];
        if(profile.gender == "Male"){
            randompic = maleProfile;
            
        }else{
            randompic = femaleProfile;
        }
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="${randompic[Math.floor(Math.random()*3)]}" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${year-parseInt(birthday[2],10)}</p>
        </div>
    </div>`
    //Way 2 : The hard way
        //  let profileCard =  document.createElement('div')
        // profileCard.className='birthday__profile';
        // profilesContainer.appendChild(profileCard)
        // let profileImg = document.createElement('img')
        // profileImg.setAttribute('src','assets/img/female.png')
        // profileCard.appendChild(profileImg);
        // let birthdayInfo = document.createElement('div')
        // birthdayInfo.className = 'birthday__info'
        // profileCard.appendChild(birthdayInfo)
        // let username = document.createElement('p')    
        //username.appendChild(document.createTextNode(profile.username))
        //birthdayInfo.appendChild(username)
        //let age = document.createElement('p')    
        //age.appendChild(document.createTextNode(profile.age))
        //birthdayInfo.appendChild(age)
        //console.log(profile)
    }
}

function clearAll(){
    profilesContainer.innerHTML = ""
}