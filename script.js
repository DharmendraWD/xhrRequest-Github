
let profile_header = document.querySelector('.profile-header');
console.log(profile_header);

    const requestURL = 'https://api.github.com/users/DharmendraWD';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);

    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState=== 4){
            const data = JSON.parse(this.responseText)
            console.log(data.id);
            console.log(data.avatar_url);

            // Changing data from api 
            profile_header.children[0].src= data.avatar_url;    //Github Image
            profile_header.children[1].textContent=data.name;   //Github name
            profile_header.children[2].textContent=data.login;  //Github userName
            profile_header.children[3].textContent=data.bio;    //Github Bio
            profile_header.children[4].children[0].children[0].textContent=data.followers   //Github Followers
            profile_header.children[4].children[1].children[0].textContent=data.following   //Github Following
           profile_header.children[5].children[0].children[1].textContent=data.location; //Ghub Addess
           
           if(data.email !== null){
            profile_header.children[5].children[1].children[1].textContent=data.email;
        }
        else{
            profile_header.children[5].children[1].children[1].textContent='Not Given';
           }
               profile_header.children[5].children[2].children[1].textContent=data.public_repos;

               let cratedYMD = data.created_at.substring(0, 10)
               profile_header.children[5].children[3].children[1].textContent=cratedYMD;
        }
    }

    xhr.send()
