import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user-class'
import { Repository } from './repository-class'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:User;
  repository:Repository[];

  constructor(private http:HttpClient) {
    this.user=new User("",0,0,0, new Date())
   this.repository= []
   }
   userRequest(userInput){
  
    var userName=userInput;
    
    interface ApiResponse{
      name:string;
      followers:number;
      following:number;
      public_repos:number;
      
      
     
    }

    let promise =new Promise((resolve,reject)=>{
      // Prepare the URI.
      const uri = `https://api.github.com/users/${userName}?access_token=${environment.apikey}`
      
      // Make the request.
      this.http.get<ApiResponse>(uri)
      .toPromise()
      .then((response) => {
          this.user.name=response.name
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.public_repos=response.public_repos

          resolve()
      },
      error=>{
              this.user.name="Sorry the user name can not be found!"

              reject(error)
          }
      )
  })

  return promise
  
}

repositoryrequest(userInput){
  
  var userName=userInput;
  
  interface ApiReposito{
    name:string;
    description:string;
    
    
   
  }

  let promises =new Promise((resolve,reject)=>{
    this.http.get<ApiReposito>('https://api.github.com/users/'+userName+'/repos?access_token='+ environment.apikey).toPromise().then(response=>{
        for (var i in response){
          console.log(i)
          this.repository.push(new Repository(response[i].name,response[i].description))
        }
        
        resolve()
    },
    error=>{

            reject(error)
        }
    )
})

return promises
}
}