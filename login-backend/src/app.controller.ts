import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async checkAndLogin(@Res() res, @Body() userDto: User) {
    console.log(await this.appService.isUserExists(userDto));

    if (!(await this.appService.isUserExists(userDto))) {
      return res.status(HttpStatus.OK).json({
        loggedIn: false,
        message: "The username you entered doesn't belong to an account. Please check your username and try again.",
      });
    } else {
      if (!(await this.appService.isPasswordOk(userDto))) {
        return res.status(HttpStatus.OK).json({
          loggedIn: false,
          message: 'Sorry, your password was incorrect. Please double-check your password.',
        });
      }

      return res.status(HttpStatus.OK).json({
        loggedIn: true,
        message: 'Login Successful',
      });
    }
  }
}
