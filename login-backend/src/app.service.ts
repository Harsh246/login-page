import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}


  async createUser(user: User): Promise<User>{
     const newUser = new this.userModel(user)
     return newUser.save()
  }

  async isUserExists(user: User): Promise<any> {
  
    const userResult = await this.userModel.findOne({ username: user.username });
    console.log('userResult', userResult)
  

     return !userResult ? false:true;

  }

  async isPasswordOk(user: User): Promise<any> {

    const userResult = await this.userModel.findOne({ username: user.username });
    if (userResult.password === user.password) 
    return true;
    else 
    return false;
  }


}